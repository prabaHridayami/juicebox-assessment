import localFont from "next/font/local";

const bagoss = localFont({
  src: [
    {
      path: "./Bagoss/Bagoss.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bagoss",
});

const sohne = localFont({
  src: [
    {
      path: "./Sohne (Body)/Sohne-Buch.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sohne",
});

const graphik = localFont({
  src: [
    {
      path: "./Graphik/Graphik-Medium.eot",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-graphik",
});

const agrandir = localFont({
  src: [
    {
      path: "./PP Agrandir/PPAgrandir-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./PP Agrandir/PPAgrandir-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./PP Agrandir/PPAgrandir-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-agrandir",
});

export { bagoss, sohne, graphik, agrandir };
