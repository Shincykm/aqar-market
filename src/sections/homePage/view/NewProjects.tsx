"use client";
import Link from "next/link";
import Image from "next/image";
import Title from "../Title";
import { Cards, Carousel, Container, CustomSwiper } from "@/components/shared";
import { PROPERTY_CATEGORIES, DEVELOPER_DATA } from "@/constants/constants";
import DeveloperCards from "@/components/shared/cards/DeveloperCards";

const NewProjects = () => {
  const renderCardBody = (property, link) => {
    return (
      <>
        {property?.property_type && (
          <div className="overlay p-6 bg-transparent">
            <div className="bg-primary-blue max-w-max px-4 py-2 rounded-lg">
              <p className="text-white text-xs capitalize">
                {property.property_type?.name_en}
              </p>
            </div>
          </div>
        )}

        <div className="capitalize flex flex-col gap-3 py-4 border-b-[1px] border-secondary-gray">
          <div className="min-h-16">
            <h1 className="text-xl text-secondary-blue font-medium">
              {property?.name_en || "Property Name Unavailable"}
            </h1>
          </div>

          <p className="font-satoshi text-primary-blue">
            Location: {`${property?.address?.country?.name || "Unknown"}`}
          </p>

          <p
            className={`${
              property?.amount ? "text-primary-green" : "text-primary-gray"
            } text-lg font-medium`}
          >
            {`${
              property?.amount
                ? `From AED ${property?.amount}`
                : "Contact Agent For Price"
            }`}
          </p>

          <div className="flex font-normal gap-4">
            {property?.size_sqft && (
              <div className="flex gap-1">
                <Image
                  src="/icons/ic_link.svg"
                  width={16}
                  height={16}
                  alt={`area-${property?.size_sqft}`}
                  className="w-4 h-4"
                />
                <span className="text-xs">{`${property?.size_sqft} Sq.Ft`}</span>
              </div>
            )}

            {property?.count_bedrooms && (
              <div className="flex gap-1">
                <Image
                  src="/icons/ic_bed.svg"
                  width={16}
                  height={16}
                  alt={`bed-${property?.count_bedrooms}`}
                  className="w-5 h-5"
                />
                <span className="text-xs">{`${property?.count_bedrooms} bedrooms`}</span>
              </div>
            )}

            {property?.count_bathrooms && (
              <div className="flex gap-1">
                <Image
                  src="/icons/ic_accessories.svg"
                  width={16}
                  height={16}
                  alt={`bathrooms-${property?.count_bathrooms}}`}
                  className="w-4 h-4"
                />
                <span className="text-xs">{`${property?.count_bathrooms} bathrooms`}</span>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <section className="home-page">
      <Container className="mb-4 px-3 lg:px-30">
        <div className="md:mb-10">
          <Title
            title={"New Projects"}
            description={
              "We have a magnificent selection of upcoming and new projects that will open your eyes to the future’s potential. These properties make tomorrow worth waiting for."
            }
          />
        </div>
      </Container>

      {/* Cards */}
      <div className="px-3 lg:pl-30">
        <CustomSwiper scrollbar={true} slidesPerView={2.5} spaceBetween={30}>
          {PROPERTY_CATEGORIES.map((item, index) => (
            <Cards key={index} width={"max-w-[600px]"}>
              <Carousel images={item?.pictures} />
              {renderCardBody(item, `/properties/property-details/${item.id}`)}
              <DeveloperCards developerData={DEVELOPER_DATA[0]} />
            </Cards>
          ))}
        </CustomSwiper>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row items-center justify-between description px-3 lg:px-30 pt-20">
        <p>
          Why not explore all of the communities on offer and find the lifestyle
          of your dreams?
        </p>

        <Link href={"#"} className="btn-round text-xs lg:text-base border-primary-blue">
          <p>See More</p>
        </Link>
      </div>
    </section>
  );
};

export default NewProjects;
