import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../../public/Recoleta-Alt-Bold.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grandma Pentest",
  description:
    "AI scams are everywhere. Protect your loved ones with Grandma Pentest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
