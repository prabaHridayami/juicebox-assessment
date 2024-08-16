import localFont from "next/font/local";

const bagoss = localFont({
  src: [
    {
      path: "../../public/fonts/Bagoss/Bagoss.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bagoss",
  preload: true,
});

const sohne = localFont({
  src: [
    {
      path: "../../public/fonts/Sohne (Body)/Sohne-Buch.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sohne",
  preload: true,
});

const graphik = localFont({
  src: [
    {
      path: "../../public/fonts/Graphik/Graphik-Medium.eot",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-graphik",
  preload: true,
});

const agrandir = localFont({
  src: [
    {
      path: "../../public/fonts/PP Agrandir/PPAgrandir-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PP Agrandir/PPAgrandir-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PP Agrandir/PPAgrandir-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-agrandir",
  preload: true,
});

export { bagoss, sohne, graphik, agrandir };
