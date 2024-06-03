import { Container } from "@/components/shared";
import React from "react";
import Title from "../Title";
import Link from "next/link";

const BuyProperty = () => {
  return (
    <section className="home-page mt-40">
      <Container className="mt-13 mb-4 px-3 lg:px-30 flex flex-col gap-10 lg:gap-20">
          <Title
            title={"Easy Step to Buy Property"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />

        <div className="grid grid-cols-3 gap-4">
          {[
            {
              title:"View Listing",
              text : "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.",
            },
            {
              title:"View Listing",
              text : "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.",
            },
            {
              title:"View Listing",
              text : "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.",
            },
          ].map((item,index) => (
            <div className="flex-col pr-3" key={index}>
            <div className="bg-black p-2 w-14 h-14 rounded-full text-center">
              <span className="text-white font text-2xl">{index + 1}</span>
            </div>
            <h1 className="capitalize text-primary-blue text-2xl lg:text-40px mt-4">View Listing</h1>
            <p className="mt-3">{item.text}</p>
          </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 lg:flex-row items-center justify-between description px-3 lg:px-30 pt-3">
        <p>
          Why not explore all of the communities on offer and find the lifestyle
          of your dreams?
        </p>

        <Link href={"#"} className="btn-round text-xs lg:text-base border-primary-blue">
          <p>See More</p>
        </Link>
      </div>
      </Container>
    </section>
  );
};

export default BuyProperty;
