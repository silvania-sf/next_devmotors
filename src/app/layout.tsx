import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "DevMotors - sua oficina especializada!",
  description: "Oficina de carros em São Paulo",
  keywords: ['oficina', 'oficina carros', 'carros', 'manutenção de carros'],
  openGraph: {
    title: "DevMotors - sua oficina especializada!",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <p style={{textAlign: "center", marginTop: 54, marginBottom: 24}}>
          Todos os direitos reservados @ {`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
