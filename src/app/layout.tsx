import type { Metadata } from "next";
import { Montserrat, Archivo } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "emotify.ai - Discover the music that suits your mood",
  description: "Discover the music that suits your mood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${archivo.variable} antialiased bg-[url('/pattern-light.webp')] dark:bg-[url('/pattern-dark.webp')] bg-center bg-cover z-10`}
      >
        {children}
      </body>
    </html>
  );
}
