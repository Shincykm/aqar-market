import React, { useEffect, useState } from "react";
import Title from "../Title";
import {
  AgentCards,
  Cards,
  Carousel,
  Container,
  CustomSwiper,
} from "@/components/shared";
import { AGENTS_DETAILS, PROPERTY_CATEGORIES } from "@/constants/constants";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

async function fetchProperties() {
  try {
    const response = await fetch(
      `${process.env.VITE_GET_PROPERTY_LIST}?page=1&limit=10`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

const LatestListing = async () => {
  const { data: properties } = await fetchProperties();

  return (
    <>
      <Container className="mt-13 mb-4 px-30">
        <div className="md:mb-10">
          <Title
            title={"Latest Listing"}
            description={
              "We have a magnificent selection of upcoming and new projects that will open your eyes to the future’s potential. These properties make tomorrow worth waiting for."
            }
          />
        </div>
      </Container>

      {/* Cards */}
      <CustomSwiper scrollbar={false} slidesPerView={3} spaceBetween={10}>
        {properties?.map((property) => (
          <Cards key={property?.id} width="max-w-[400px]">
            <Carousel images={property.pictures} />
            {/* Card body */}
            {/* <Link href={"#"}> */}
              {property?.property_type && (
                <div className="overlay p-6 bg-transparent max-w-[400px]">
                  <div className="bg-primary-blue max-w-max px-4 py-2 rounded-lg">
                    <p className="text-white text-xs">
                      {property.property_type?.name_en}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3 py-4 border-b-[1px] border-secondary-gray">
                <div className="min-h-16">
                  <h1 className="text-xl text-secondary-blue font-medium">
                    {property?.name_en}
                  </h1>
                </div>
                {property?.address && (
                  <p className="font-satoshi text-primary-blue">
                    Location: {`${property?.address?.country?.name}`}
                  </p>
                )}
                {property?.amount && (
                  <p className="text-primary-green text-lg font-medium">
                    From AED {property?.amount}
                  </p>
                )}

                <div className="flex font-normal gap-4">
                  <div className="flex gap-1">
                    <Image
                      src="/icons/ic_link.svg"
                      width={16}
                      height={16}
                      alt={`area-${property?.size_sqft}`}
                      className="w-4 h-4"
                    />
                    <span className="text-xs">{`${
                      property?.size_sqft || 0
                    } Sq.Ft`}</span>
                  </div>
                  <div className="flex gap-1">
                    <Image
                      src="/icons/ic_bed.svg"
                      width={16}
                      height={16}
                      alt={`bed-${property?.count_bathrooms}`}
                      className="w-5 h-5"
                    />
                    <span className="text-xs">{`${
                      property?.count_bedrooms
                    } bedrooms`}</span>
                  </div>

                  <div className="flex gap-1">
                    <Image
                      src="/icons/ic_accessories.svg"
                      width={16}
                      height={16}
                      alt={`bathrooms-${property?.count_bathrooms}}`}
                      className="w-4 h-4"
                    />
                    <span className="text-xs">{`${
                      property?.count_bathrooms
                    } bathrooms`}</span>
                  </div>
                </div>
              </div>
            {/* </Link> */}
            {property?.agents[0] && <AgentCards agentData={property?.agents[0]} />}
          </Cards>
        ))}
      </CustomSwiper>
    </>
  );
};

export default LatestListing;
