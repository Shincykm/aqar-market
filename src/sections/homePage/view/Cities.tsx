import { Container } from "@/components/shared";
import Title from "../Title";
import Image from "next/image";
import Link from "next/link";
import { CITY_DATA } from "@/constants/constants";

const Cities = () => {
  return (
    <section className="home-page">
      <Container className="px-3 lg:px-30">
        <div className="lg:mb-10">
          <Title
            title={"Available in Numerous Cities"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-stretch gap-6 mt-4 lg:mt-20">
          {CITY_DATA?.map((item, index) => (
            <div key ={index} className="flex flex-col gap-5 w-full">
              <div className="relative h-[240px] rounded-2xl overflow-hidden">
                <Image
                  src={item?.imageurl}
                  alt={item.city}
                  fill
                  style={{ objectFit: 'cover'}}
                  sizes="100%"
                />
              </div>
              <h1 className="text-2xl font-medium text-primary-violet">
                {item.city}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 lg:flex-row items-center justify-between description px-3 lg:px-30 pt-20">
          <p>
            Why not explore all of the communities on offer and find the
            lifestyle of your dreams?
          </p>

          <Link href={"#"} className="btn-round text-xs lg:text-base border-primary-blue">
            <p>See More</p>
          </Link>
        </div>

        <div className="relative h-96 lg:h-[512px]">
          <div className="overlay mt-20 rounded-2xl overflow-hidden">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={"/images/cities/burj_khalifa.jpeg"}
                alt="Burj Khalifa"
                fill
                style={{ objectFit: 'cover', objectPosition: '50% 80%' }}
              />
            </div>
            <div className="overlay bg-black bg-opacity-45 text-white">
              <div className="flex item-center  flex-col gap-7 lg:w-1/2 pl-5 lg:pl-20 pt-20 lg:pt-28">
                <h1 className="text-2xl lg:text-40px">Lorem ipsum dolor</h1>
                <p className="pr-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  href={"#"}
                  className="btn-round border-white text-center max-w-56"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cities;
