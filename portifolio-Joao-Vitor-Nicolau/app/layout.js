import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portifolio | João Vitor Nicolau",
  description: "Esse é o projeto do meu portifolio, onde mostro meus projetos e habilidades como desenvolvedor front-end.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

