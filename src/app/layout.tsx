import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "300", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Bytebank | O banco digital que evolui com você",
  description:
    "Abra sua conta gratuita no Bytebank e tenha controle total do seu dinheiro com segurança, agilidade e inovação digital.",
  authors: [{ name: "Bytebank S.A." }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Bytebank | O banco digital que evolui com você",
    description:
      "Abra sua conta gratuita no Bytebank e tenha controle total do seu dinheiro com segurança, agilidade e inovação digital.",
    type: "website",
    url: "https://www.bytebank.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bytebank | O banco digital que evolui com você",
    description:
      "Abra sua conta gratuita no Bytebank e tenha controle total do seu dinheiro com segurança, agilidade e inovação digital.",
  },
  alternates: {
    canonical: "https://www.bytebank.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-Br">
      <head>
        <link rel="icon" href="/favicon64px.ico" />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
