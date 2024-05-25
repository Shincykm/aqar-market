import Title from "../Title";
import {
  AgentCards,
  Cards,
  Carousel,
  Container,
  CustomSwiper,
} from "@/components/shared";
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

  const renderCardBody = (property)=>{
    return (
      <>
      {/* <Link href={"#"}> */}
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

              <p className={`${property?.amount ? "text-primary-green" : "text-primary-gray"} text-lg font-medium`}>
                {`${property?.amount ? `From AED ${property?.amount}` : "Contact Agent For Price"}`}
              </p>

              <div className="flex font-normal gap-4">
                
                {property?.size_sqft && (<div className="flex gap-1">
                  <Image
                    src="/icons/ic_link.svg"
                    width={16}
                    height={16}
                    alt={`area-${property?.size_sqft}`}
                    className="w-4 h-4"
                  />
                  <span className="text-xs">{`${property?.size_sqft} Sq.Ft`}</span>
                </div>)}

                {property?.count_bedrooms && <div className="flex gap-1">
                  <Image
                    src="/icons/ic_bed.svg"
                    width={16}
                    height={16}
                    alt={`bed-${property?.count_bedrooms}`}
                    className="w-5 h-5"
                  />
                  <span className="text-xs">{`${property?.count_bedrooms
                    } bedrooms`}</span>
                </div>}

                {property?.count_bathrooms && <div className="flex gap-1">
                  <Image
                    src="/icons/ic_accessories.svg"
                    width={16}
                    height={16}
                    alt={`bathrooms-${property?.count_bathrooms}}`}
                    className="w-4 h-4"
                  />
                  <span className="text-xs">{`${property?.count_bathrooms
                    } bathrooms`}</span>
                </div>}
              </div>
            </div>
            {/* </Link> */}
      </>
    );
  }

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
      <CustomSwiper scrollbar={false} slidesPerView={3.5} spaceBetween={30}>
        {properties?.map((property) => (
          <Cards key={property?.id} width="max-w-[400px]">
            <Carousel images={property.pictures} />
            {renderCardBody(property)}
            {property?.agents[0] && <AgentCards agentData={property?.agents[0]} />}
          </Cards>
        ))}
      </CustomSwiper>
    </>
  );
};

export default LatestListing;
