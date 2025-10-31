import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metalMania = localFont({
  src: "../../public/fonts/MetalMania-Regular.ttf",
  variable: "--font-metalMania",
  weight: "400",
  style: "normal",
});

const ryeFont = localFont({
  src: "../../public/fonts/Rye-Regular.ttf",
  variable: "--font-rye",
  weight: "400",
  style: "normal",
});


export const metadata = {
  title: "Ouija Virtual | Invocación Espectral",
  description: "Una experiencia web inmersiva y misteriosa para invocar al más allá.",
  icons: {
    icon: '/assets/icons/PEE_logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} ${metalMania.variable} ${ryeFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
