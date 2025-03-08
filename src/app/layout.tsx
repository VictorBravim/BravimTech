import type { Metadata } from "next";
import { Archivo, Roboto } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "700"], // Adicione os pesos necessários
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // Adicione os pesos necessários
});

export const metadata: Metadata = {
  title: "BravimTech - Serviços Online",
  description: "Serviços Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}