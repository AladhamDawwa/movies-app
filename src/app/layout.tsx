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
      <head>
        <meta property="og:title" content="Movies-app"></meta>
        <meta property="og:description" content="Adhoom's movie app."></meta>
        <meta
          property="og:image"
          content="https://media.istockphoto.com/id/1295114854/photo/empty-red-armchairs-of-a-theater-ready-for-a-show.jpg?s=1024x1024&w=is&k=20&c=cSI-8stXlD8mieP_sD7jCDdWwrSXEV1w7TbTZo2TSRs="
        ></meta>
        {/* <meta property="og:url" content=""></meta> */}
        <meta property="og:type" content="website"></meta>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
