import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer/footer";
import BackgroundBubbles from "@/components/Backgroundbubbles/backgroundBubbles";
import ClientOnlyMotion from "@/components/Transition/ClientOnlyMotion";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnlyMotion>
          <BackgroundBubbles />
          <Navbar />
          {children}
          <Footer />
        </ClientOnlyMotion>
      </body>
    </html>
  );
}
