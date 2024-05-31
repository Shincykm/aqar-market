import type { Metadata } from "next";
import './globals.css';
import { chillax, objective, satoshi } from "@/lib/fonts";
import Footer from "@/sections/footer/Footer";
import Navbar from "@/sections/navigation/Navbar";

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


export const metadata: Metadata = {
  title: 'Aqar Market',
  description: 'Find your dream house here',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chillax.variable} ${satoshi.variable} ${objective.variable} mx-auto overflow-x-hidden`}>
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
        </body>
    </html>
  );
}
