import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Inter } from "next/font/google";
import IntroOverlay from "./components/intro-overlay";
import MotionProvider from "./components/motion-provider";
import Nav from "./components/nav";
import ScrollProgress from "./components/scroll-progress";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dheeraj Kanneganti — Behavioral Research & Applied Analytics",
  description:
    "Behavioral research that drives commercial decisions. Researcher and analyst working at the intersection of I-O Psychology, consumer behavior, and applied market analysis.",
};

const themeBootstrap = `(function(){try{var t=localStorage.getItem('theme');var d=t==='light'?false:true;if(d)document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <MotionProvider>
          <ScrollProgress />
          <IntroOverlay />
          <Nav />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
