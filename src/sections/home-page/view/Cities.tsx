import { Container } from "@/components/shared";
import Title from "../Title";
import Image from "next/image";
import Link from "next/link";
import { CITY_DATA } from "@/constants/constants";

const Cities = () => {
  return (
    <section className="home-page">
      <Container className="mt-13 mb-4 px-30">
        <div className="md:mb-10">
          <Title
            title={"Available in Numerous Cities"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div className="flex items-center justify-stretch gap-6 mt-20">
          {CITY_DATA?.map((item, index) => (
            <div className="flex flex-col gap-5 w-full">
              <div className="relative h-[240px] rounded-2xl overflow-hidden">
                <Image
                  src={item?.imageurl}
                  alt={item.city}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h1 className="text-2xl font-medium text-primary-violet">
                {item.city}
              </h1>
            </div>
          ))}
        </div>
      </Container>

      <div className="flex items-center justify-between description px-30 pt-20">
        <p>
          Why not explore all of the communities on offer and find the lifestyle
          of your dreams?
        </p>

        <Link href={"#"} className="btn-round">
          <p>See More</p>
        </Link>
      </div>

      <div className="relative px-30 max-w-[1200px] h-[512px]">
      <div className="overlay left-[120px] mt-20 rounded-2xl overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={"/images/cities/burj_khalifa.jpeg"}
            alt="Burj Khalifa"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Cities;
