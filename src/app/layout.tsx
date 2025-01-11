import { Header } from "@/components";
import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Movies App",
  icons: [{ url: "/icon.svg" }],
  description: "A simple movie app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
