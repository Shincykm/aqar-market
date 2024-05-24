import { Tab, Tabs } from "@/components/shared";
import { Video } from "@/components/shared";
import HeroTitle from "@/sections/hero/HeroTitle";
import SearchForm from "@/sections/homePage/SearchForm";
import SearchForm1 from "../SearchForm1";

const HomeHero = () => {
  return (
      <div className="relative max-h-[600px]">
        {/* Video Component */}
        <Video src={"videos/aqar-video.mp4"} height="600px" />
        <div className="overlay bg-black bg-opacity-30"></div>

        <div className="absolute top-2 md:top-1/4 px-2 md:px-30">
          <div className="text-white">
            {/* Title Component */}
            <HeroTitle
              fontSize="text-clamp md:text-40px"
              title="Discover a wide selection of home"
            />
            <HeroTitle
              fontSize="text-clamp md:text-40px"
              title="listings in the UAE with Aqarmarket."
            />

            {/* Search */}
            {/* <Tabs>
              <Tab label="RENT"><SearchForm type ="rent"/></Tab>
              <Tab label="BUY"><SearchForm type ="buy"/></Tab>
            </Tabs> */}


            {/* Testing */}
            <Tabs>
              <Tab label="RENT"><SearchForm type ="rent"/></Tab>
              <Tab label="BUY"><SearchForm type ="buy"/></Tab>
            </Tabs>
          </div>
        </div>
      </div>
  );
};

export default HomeHero
