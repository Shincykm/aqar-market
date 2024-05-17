import localFont from "next/font/local";

export const chillax = localFont({
  src: "../../public/fonts/Chillax-Variable.ttf",
  variable: "--font-chillax",
  display: "swap",
});

export const objective = localFont({
  src: [
    {
      path: "../../public/fonts/Objective-Medium.woff2",
      style: "medium",
    },
    {
      path: "../../public/fonts/Objective-Regular.woff2",
      style: "normal",
    },
  ],
  variable: "--font-objective",
  display: "swap",
});

export const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});
