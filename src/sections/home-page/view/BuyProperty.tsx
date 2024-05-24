import { Container } from "@/components/shared";
import React from "react";
import Title from "../Title";
import Link from "next/link";

const BuyProperty = () => {
  return (
    <section className="home-page mt-40">
      <Container className="mt-13 mb-4 px-30 flex flex-col gap-20">
          <Title
            title={"Easy Step to Buy Property"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />

        <div className="grid grid-cols-3 gap-4">
          <div className="flex-col pr-3">
            <div className="bg-black p-2 w-14 h-14 rounded-full text-center">
              <span className="text-white font text-2xl">1.</span>
            </div>
            <h1 className="text-primary-blue text-40px mt-4">View Listing</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className="flex-col pr-3">
            <div className="bg-black p-2 w-14 h-14 rounded-full text-center">
              <span className="text-white font text-2xl">2.</span>
            </div>
            <h1 className="text-primary-blue text-40px mt-4">View Listing</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className="flex-col pr-3">
            <div className="bg-black p-2 w-14 h-14 rounded-full text-center">
              <span className="text-white font text-2xl">3.</span>
            </div>
            <h1 className="text-primary-blue text-40px mt-4">View Listing</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between description">
          <p>
            Why not explore all of the communities on offer and find the
            lifestyle of your dreams?
          </p>

          <Link href={"#"} className="btn-round border-primary-blue">
            <p>See More</p>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BuyProperty;
