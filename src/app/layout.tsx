import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gamer.store",
  description: "A versão mais básica da loja de jogos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={}
      >
        {children}
      </body>
    </html>
  );
}
