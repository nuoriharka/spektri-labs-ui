import { Inter, Plus_Jakarta_Sans, Archivo, Manrope } from "next/font/google";
export const techSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-tech",
  display: "swap",
});
export const techDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display-tech",
  weight: ["600","700"],
  display: "swap",
});
export const designerDisplay = Archivo({
  subsets: ["latin"],
  variable: "--font-display-designer",
  weight: ["600","700"],
  display: "swap",
});
export const designerSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-designer",
  display: "swap",
});
