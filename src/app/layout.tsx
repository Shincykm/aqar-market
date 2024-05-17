import type { Metadata } from "next";
import './globals.css';
import { chillax, objective, satoshi } from "@/lib/fonts";
import Footer from "@/sections/footer/Footer";
import Navbar from "@/sections/navigation/Navbar";


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
        {children}
        <Footer />
        </body>
    </html>
  );
}
