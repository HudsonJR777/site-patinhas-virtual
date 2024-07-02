import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Instagram } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  title: "Patinhas Virtual",
  description: "Ong patinhas virtual",
  openGraph: {
    images: ["https://i.imgur.com/Vun3wka.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#4a128c] overflow-x-hidden text-zinc-50">{children}</body>
      <footer className="bg-primaryDarkeColor flex justify-center py-8 flex-col items-center gap-4 mt-10">
        <div className="text-white flex flex-wrap gap-3 justify-center" >
          <span>Feito com ❤️ pela <b>Patinha virtual 🐾</b> </span>
          <span>Todos os direitos reservados - 2024</span>
        </div>
        <Link target="_blank" className="text-white flex gap-4" href="https://www.instagram.com/patinha_virtual/"> <Instagram /> <span>|</span> Siga no instagram </Link>
      </footer>
    </html>
  );
}
