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
      <Container className="mt-13 mb-4 px-3 lg:px-30">
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
      <div className="px-3 lg:pl-30">
      <CustomSwiper scrollbar={true} slidesPerView={1.5} spaceBetween={10}>
        {communities?.map((community, index) => (
          <Cards key={community?.id} propClass="max-w-[800px]">
            <div className="rounded-[20px] overflow-hidden">
              <div className="relative w-full h-[344px] rounded-2xl overflow-hidden">
                <Image
                  src={community.picture.url}
                  alt="Description of image"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                  sizes="100%"
                />
              </div>

              <div className="overlay max-w-[800px] rounded-[20px] bg-black bg-opacity-40 text-white">
                <div className="absolute top-[30%] lg:top-[40%] p-6 flex flex-col justify-center gap-2 w-full ">
                  <p className="text-[19px] font-normal">{`From ${community?.price} AED`}</p>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/ic_bed_white.svg"
                      width={16}
                      height={16}
                      alt={`bed-`}
                      className="w-5 h-5"
                    />
                    <span className="text-xs">{`${community?.beds || 0
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
                    <span className="text-xs">{`${community?.beds || 0
                      } Bed Duplexes`}</span>
                  </div>
                  <div className="flex justify-between items-center ">

                    <div className="text-lg md:text-2xl lg:text-3xl xl:text-40px 2xl:text-5xl leading-normal clamp-3">
                      <h1 className="text-[37px] font-medium">
                        {community?.title}
                      </h1>
                    </div>

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

export default Communities;
