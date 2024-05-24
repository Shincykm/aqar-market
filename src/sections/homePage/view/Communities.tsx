import Title from "../Title";
import { Cards, Container, CustomSwiper } from "@/components/shared";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Communities = () => {
  const communities = [
    {
      id: 1,
      beds: "2-5",
      title: "Example Community One",
      picture: {
        url: "/images/properties/communities-1.jpeg",
      },
      price: "10,00000,00",
    },
    {
      id: 2,
      beds: "2-5",
      title: "Example Community Two",
      picture: {
        url: "/images/properties/communities-2.jpeg",
      },
      price: "15,00000,00",
    },
    {
      id: 3,
      beds: "2-5",
      title: "Example Community Three",
      picture: {
        url: "/images/properties/communities-2.jpeg",
      },
      price: "20,00000,00",
    },
  ];

  return (
    <section className="home-page">
      <Container className="mt-13 mb-4 px-30">
        <div className="md:mb-10">
          <Title
            title={"Communities"}
            description={
              "We have a magnificent selection of upcoming and new projects that will open your eyes to the future’s potential. These properties make tomorrow worth waiting for."
            }
          />
        </div>
      </Container>

      {/* Cards */}
      <CustomSwiper scrollbar={true} slidesPerView={2} spaceBetween={30}>
        {communities?.map((community, index) => (
          <div key={index} className="rounded-[20px] overflow-hidden">
            <div className="relative w-full h-[344px] rounded-2xl overflow-hidden">
              <Image
                src={community.picture.url}
                alt="Description of image"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                sizes="100%"
              />
            </div>

            <div className="overlay rounded-[20px] bg-black bg-opacity-40 text-white">
              <div className="absolute top-[45%] p-6 flex flex-col justify-center gap-2 w-full ">
                <p className="text-[19px] font-normal">{`From ${community?.price} AED`}</p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/ic_bed_white.svg"
                    width={16}
                    height={16}
                    alt={`bed-`}
                    className="w-5 h-5"
                  />
                  <span className="text-xs">{`${
                    community?.beds || 0
                  } Bed Apartments`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/ic_shower_white.svg"
                    width={16}
                    height={16}
                    alt={`bed-`}
                    className="w-5 h-5"
                  />
                  <span className="text-xs">{`${
                    community?.beds || 0
                  } Bed Duplexes`}</span>
                </div>
                <div className="flex justify-between items-center ">
                  <h1 className="text-[37px] font-medium">
                    {community?.title}
                  </h1>
                  <Link
                    href={"#"}
                    className="bg-primary-green rounded-xl py-3 px-6"
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CustomSwiper>

      <div className="flex items-center justify-between description px-30 pt-20">
        <p>
          Why not explore all of the communities on offer and find the lifestyle
          of your dreams?
        </p>

        <Link href={"#"} className="btn-round border-primary-blue">
          <p>See More</p>
        </Link>
      </div>
    </section>
  );
};

export default Communities;
