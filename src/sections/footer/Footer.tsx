"use client";
import { Logo } from "@/components/shared";
import Link from "next/link";

const Footer = () => {
  
  return (
    <>
      <footer className="text-center text-surface/75">
        {/* main footer container */}
        <div className="mx-auto lg:px-30 lg:py-20 xl:py-24 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Services section --> */}
            <div className="font-chillax">
              <h6 className="mb-4 text-primary-blue text-xl flex justify-center font-semibold uppercase md:justify-start">
                Services
              </h6>
              <p className="mb-4">
                <Link href="#">Apartment</Link>
              </p>
              <p className="mb-4">
                <Link href="#">Apartment</Link>
              </p>
              <p className="mb-4">
                <Link href="#">Apartment</Link>
              </p>
              <p className="mb-4">
                <Link href="#">Apartment</Link>
              </p>
            </div>
            {/* <!-- Information section --> */}
            <div className="font-chillax">
              <h6 className="mb-4 text-primary-blue text-xl flex justify-center font-semibold uppercase md:justify-start">
                Services
              </h6>
              <p className="mb-4">
                <Link href="#">Apartment</Link>
              </p>
              <p className="mb-4">
                <Link href="#">Apartment</Link>
              </p>
              <p className="mb-4">
                <Link href="#">Apartment</Link>
              </p>
              <p className="mb-4">
                <Link href="#">Apartment</Link>
              </p>
            </div>
            {/* <!-- Company section --> */}
            <div className="font-chillax">
              <h6 className="mb-4 text-primary-blue text-xl flex justify-center font-semibold uppercase md:justify-start">
                Services
              </h6>
              <p className="mb-4">
                <Link href="#">Apartment</Link>
              </p>
              <p className="mb-4">
                <Link href="#">Apartment</Link>
              </p>
              <p className="mb-4">
                <Link href="#">Apartment</Link>
              </p>
              <p className="mb-4">
                <Link href="#">Apartment</Link>
              </p>
            </div>

            <div className="font-semibold text-sm leading-7 flex flex-col lg:items-start mb-5 lg:mb-0">
              <Logo />
              <p className="mt-8 font-openSans font-normal text-gray-four">
                Stay connected with us and let's know more stories about housing
                & real estate and more explorer us
              </p>
              <div className="flex-center gap-6 mt-6">
                <Link href={"#"} target="_blank">
                  <div className="flex-center rounded-full w-10 h-10 bg-primary-green-light">
                    <img src="/icons/ic_facebook.svg" alt={""} />
                  </div>
                </Link>

                <Link href={"#"} target="_blank">
                  <div className="flex-center rounded-full w-10 h-10 bg-primary-green-light">
                    <img src="/icons/ic_pinterset.svg" alt={""} />
                  </div>
                </Link>

                <Link href={"#"} target="_blank">
                  <div className="flex-center rounded-full w-10 h-10 bg-primary-green-light">
                    <img src="/icons/ic_instagram.svg" alt={""} />
                  </div>
                </Link>

                <Link href={"#"} target="_blank">
                  <div className="flex-center rounded-full w-10 h-10 bg-primary-green-light">
                    <img src="/icons/ic_twitter.svg" alt={""} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="bg-primary-blue text-white text-sm min-h-[5.6rem] flex justify-between">
          <div className="max-w-[1200px] px-6 m-auto flex flex-col lg:flex-row items-center gap-3 justify-between w-full">
            <Logo color="white" />
            <div className="text-center font-openSans">
              <span>© Aquamarket 2024 </span>
              All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
