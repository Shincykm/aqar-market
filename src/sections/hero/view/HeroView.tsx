import { Tab, Tabs } from "@/components/shared";
import { Video } from "@/components/shared";
import HeroContainer from "@/sections/hero/HeroContainer";
import HeroTitle from "@/sections/hero/HeroTitle";
import SearchForm from "@/sections/hero/SearchForm";

const HeroView = () => {
  return (
    <HeroContainer>
      <div className="relative">
        {/* Video Component */}
        <Video src={"videos/aqar-video.mp4"} height="600px" />
        <div className=" absolute w-full h-full inset-0 bg-darken bg-black bg-opacity-30"></div>

        <div className="absolute top-32 px-30">
          <div className="text-white w-[85%]">
            {/* Title Component */}
            <HeroTitle
              fontSize="text-40px"
              title="Discover a wide selection of home listings in the UAE with Aqarmarket."
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
