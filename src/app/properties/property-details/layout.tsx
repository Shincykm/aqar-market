import type { Metadata } from "next";
import { HeroSection } from "@/sections/property-details-page/view";
import BreadCrumbs from "@/sections/property-details-page/BreadCrumbs";
import { FaAngleRight, FaArrowRight, FaHome } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'Aqar Market - properties',
  description: 'Find your dream house here',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <HeroSection />

    <BreadCrumbs 
        homeElement={<FaHome size={20} />}
        separator={<span> <FaAngleRight size={20}/> </span>}
        activeClasses='font-satoshi text-gray-400'
        containerClasses='flex items-center py-5 text-primary-green' 
        listClasses='mx-2 text-base'
        capitalizeLinks

    />

    <section id="property-details">
        {children}
    </section>
    </>
  );
}