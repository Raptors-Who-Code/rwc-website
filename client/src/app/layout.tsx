import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./LandingPage/Navbar";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900`}
      >
        <Providers>
          <div className="relative w-full max-w-screen overflow-hidden">
            {/* Background */}
            <div className="fixed top-0 -z-10 h-full w-full">
              <div className="absolute inset-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

            {/* Content */}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

{
  /* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>; */
}

<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>;
