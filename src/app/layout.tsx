import type { Metadata } from "next";
import { bagoss, sohne, graphik, agrandir } from "@/fonts";
import "@/styles/globals.css";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Juicebox Assessment",
  description: "Frontend developer code test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bagoss.variable} ${sohne.variable} ${graphik.variable} ${agrandir.variable}`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
