import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "../lib/nextui";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHRIVASTAV law firm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
