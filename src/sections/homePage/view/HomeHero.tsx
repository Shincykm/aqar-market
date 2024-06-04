import { Tab, Tabs } from "@/components/shared";
import { Video } from "@/components/shared";
import HeroTitle from "@/sections/hero/HeroTitle";
import SearchForm from "@/components/search/SearchForm";
import { basicFetch } from "@/api/basicFetch";
import { endpoints } from "@/lib/endpoints";
const HomeHero = async () => {
  const { data: propertyTypes } = await basicFetch(`${endpoints.propertyTypes.list}?page=1&limit=20`);

  return (
    <div className="relative max-h-[600px]">
      {/* Video Component */}
      <Video src={"videos/aqar-video.mp4"} height="600px" />
      <div className="overlay bg-black bg-opacity-30"></div>

      <div className={`absolute top-1/4 px-2 md:px-30 w-full`}>
        <div className="text-white w-full">
          {/* Title Component */}
          <HeroTitle
            fontSize="font-chillax text-clamp md:text-40px"
            title="Discover a wide selection of home"
          />
          <HeroTitle
            fontSize="font-chillax text-clamp md:text-40px"
            title="listings in the UAE with Aqarmarket."
          />

          {/* Search */}
          <Tabs>
            <Tab label="RENT">
              <SearchForm type="rent" propertyTypes={propertyTypes} />
            </Tab>
            <Tab label="BUY">
              <SearchForm type="buy" propertyTypes={propertyTypes} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
