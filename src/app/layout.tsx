'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GrowthBook } from "@growthbook/growthbook-react";
import { useEffect } from "react";
import { GrowthBookProvider } from "@growthbook/growthbook-react";

import "./globals.css";


const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-eur2L1Ktct6pUFD",
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    // TODO: Use your real analytics tracking system
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key
    });
  }
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.init({ streaming: true });
  }, []);
  return (
    <GrowthBookProvider growthbook={growthbook}>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </GrowthBookProvider>
  );
}
