import type { Metadata } from "next";
import { bagoss, sohne, graphik, agrandir } from "./fonts";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";

import { GlobalProvider } from "@/contexts/GlobalContext";
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
        {/* The global provider component should wrap the entire app */}
        <GlobalProvider>
          <Header />
          <main>{children}</main>
        </GlobalProvider>
      </body>
    </html>
  );
}
