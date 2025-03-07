import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Top of site info, like bar
export const metadata: Metadata = {
  title: "UT IEEE RAS",
  description: "by Zaid Albustami",
  icons: {
    icon: [
      {
        url: "/ras_logo_big.png", //Get ico working, idk why its not :(
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >     
        {children}
      </body>
    </html>
  );
}
