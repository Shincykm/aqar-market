import Link from "next/link";
import React from "react";

const Logo = ({color = "primary-green"}) => {
  return (
    <>
      <Link href={"/"} >
       <div className="flex flex-center gap-4">
          <img src='/icons/ic_home.svg' className={`text-${color} fill-${color} stroke-${color}`} alt="aqar-market-logo" width="28" height="28" />
          <p className={`font-chillax font-[600] text-${color} text-xl`}>
            LOGO HERE
          </p>
       </div>
      </Link>
    </>
  );
};

export default Logo;
