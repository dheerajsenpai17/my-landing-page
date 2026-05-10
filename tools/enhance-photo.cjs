// Subtle photo enhancement for professional portfolio use.
// Reads from public/images/dheeraj-original.jpg (creating it from
// public/images/dheeraj.jpg on first run), applies a conservative
// tone-curve / clarity / contrast / saturation / warmth / sharpening
// pipeline, and writes the result back to public/images/dheeraj.jpg.

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IN = path.join("public", "images", "dheeraj.jpg");
const BAK = path.join("public", "images", "dheeraj-original.jpg");
const OUT = IN;

const clamp255 = (v) => (v < 0 ? 0 : v > 255 ? 255 : Math.round(v));

function buildToneLUT({ shadowLift = 18, highlightRecovery = 10, midAnchor = 128 } = {}) {
  const lut = new Uint8Array(256);
  for (let x = 0; x < 256; x++) {
    const sw = Math.max(0, 1 - x / midAnchor);
    const shadowBoost = sw * sw * shadowLift;
    const hw = Math.max(0, (x - 200) / 55);
    const highlightTame = hw * hw * highlightRecovery;
    lut[x] = clamp255(x + shadowBoost - highlightTame);
  }
  return lut;
}

function applyToneCurve(buf, lut) {
  for (let i = 0; i < buf.length; i++) buf[i] = lut[buf[i]];
}

async function applyClarity(buf, width, height, { amount = 0.18, radius = 24 } = {}) {
  const px = width * height;
  const Y = Buffer.alloc(px);
  for (let i = 0, j = 0; i < px; i++, j += 3) {
    Y[i] = clamp255(0.299 * buf[j] + 0.587 * buf[j + 1] + 0.114 * buf[j + 2]);
  }
  const blurred = await sharp(Y, { raw: { width, height, channels: 1 } })
    .blur(radius)
    .raw()
    .toBuffer();
  for (let i = 0, j = 0; i < px; i++, j += 3) {
    const delta = (Y[i] - blurred[i]) * amount;
    buf[j] = clamp255(buf[j] + delta);
    buf[j + 1] = clamp255(buf[j + 1] + delta);
    buf[j + 2] = clamp255(buf[j + 2] + delta);
  }
}

function applyContrast(buf, factor = 1.1) {
  for (let i = 0; i < buf.length; i++) {
    buf[i] = clamp255((buf[i] - 128) * factor + 128);
  }
}

function applySaturation(buf, factor = 1.05) {
  const px = buf.length / 3;
  for (let i = 0, j = 0; i < px; i++, j += 3) {
    const r = buf[j];
    const g = buf[j + 1];
    const b = buf[j + 2];
    const gray = 0.299 * r + 0.587 * g + 0.114 * b;
    buf[j] = clamp255(gray + (r - gray) * factor);
    buf[j + 1] = clamp255(gray + (g - gray) * factor);
    buf[j + 2] = clamp255(gray + (b - gray) * factor);
  }
}

function applyWarmth(buf, { rGain = 1.018, gGain = 1.004, bGain = 0.985 } = {}) {
  const px = buf.length / 3;
  for (let i = 0, j = 0; i < px; i++, j += 3) {
    buf[j] = clamp255(buf[j] * rGain);
    buf[j + 1] = clamp255(buf[j + 1] * gGain);
    buf[j + 2] = clamp255(buf[j + 2] * bGain);
  }
}

async function main() {
  if (!fs.existsSync(IN)) {
    throw new Error(`missing input: ${IN}`);
  }
  if (!fs.existsSync(BAK)) {
    fs.copyFileSync(IN, BAK);
    console.log(`backup -> ${BAK}`);
  } else {
    console.log(`backup already exists at ${BAK} (re-running from backup)`);
  }

  const src = sharp(BAK).rotate();
  const meta = await src.metadata();
  console.log(`input: ${meta.width}x${meta.height}`);

  const { data, info } = await src
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const buf = Buffer.from(data);

  applyToneCurve(buf, buildToneLUT());
  await applyClarity(buf, info.width, info.height, { amount: 0.18, radius: 24 });
  applyContrast(buf, 1.1);
  applySaturation(buf, 1.05);
  applyWarmth(buf);

  await sharp(buf, {
    raw: { width: info.width, height: info.height, channels: 3 },
  })
    .sharpen({ sigma: 1.0, m1: 0.6, m2: 1.4, x1: 3, y2: 8, y3: 12 })
    .jpeg({ quality: 95, progressive: true, chromaSubsampling: "4:4:4" })
    .toFile(OUT);

  const outStat = fs.statSync(OUT);
  const bakStat = fs.statSync(BAK);
  console.log(
    `saved -> ${OUT} (${info.width}x${info.height}, ${(outStat.size / 1024).toFixed(1)} KB; original ${(bakStat.size / 1024).toFixed(1)} KB)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
