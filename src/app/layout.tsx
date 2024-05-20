import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer/footer"; // Ruta correcta a Footer
import BackgroundBubbles from "@/components/Backgroundbubbles/backgroundBubbles";

const inter = Inter({ subsets: ["latin"] });

const Navbar = dynamic(() => import('@/components/Navbar/navbar'), { ssr: false }); // Ruta correcta a Navbar

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
