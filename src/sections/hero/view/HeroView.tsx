import { Tab, Tabs } from "@/components/shared";
import { Video } from "@/components/shared";
import HeroContainer from "@/sections/hero/HeroContainer";
import HeroTitle from "@/sections/hero/HeroTitle";
import SearchForm from "@/sections/hero/SearchForm";

const HeroView = () => {
  return (
    <HeroContainer>
      <div className="relative max-h-[600px] overflow-hidden">
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
            <Tabs>
              <Tab label="RENT"><SearchForm /></Tab>
              <Tab label="BUY"><SearchForm /></Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default HeroView;
