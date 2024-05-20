import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer/footer"; // Ruta correcta a Footer

import BackgroundBubbles from "@/components/Backgroundbubbles/backgroundBubbles";

const inter = Inter({ subsets: ["latin"] });


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps)
{
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundBubbles />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
