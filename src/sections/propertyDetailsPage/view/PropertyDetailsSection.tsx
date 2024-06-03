
import MapComponent from "@/components/maps/Map";
import { AgentCards, Button, CustomSwiper, ReadMore } from "@/components/shared";
import { IntlNumFormat } from "@/utils/intNumFormat";
import Image from "next/image";
import Link from "next/link";

const PropertyDetailsSection = async ({propertyDetails}) => {

  const iconText = [
    {
      label : propertyDetails?.property_type.name_en ? `${propertyDetails?.property_type.name_en}` : "",
      icon : "/icons/ic_home.svg"
    },
    {
      label : propertyDetails?.size_sqft ? `${propertyDetails?.size_sqft} Sqft` : "",
      icon : "/icons/ic_link.svg"
    },
    {
      label : propertyDetails?.count_bedrooms ? `${propertyDetails?.count_bedrooms} Bedrooms` : "",
      icon : "/icons/ic_bed.svg"
    },
    {
      label : propertyDetails?.count_bathrooms ? `${propertyDetails?.count_bathrooms} Bathrooms` : "",
      icon : "/icons/ic_accessories.svg"
    },
  ];

  const renderDescription = (title, description, btnText="") =>{
    return (
      <div className="w-2/3">
        <h1 className="text-2xl lg:text-40px text-primary-violet leading-relaxed">
          {title || "Property Not Available"}
        </h1>
        {description && <div className="mb-6">
          <ReadMore id="details-read-more" text ={`${description}`} paraClassName="lg:text-xl text-ternary-gray mb-5 md:mb-14"/>
        </div>}
      </div>
    );
  }

  return (
    <>
      {/* propertyDetails */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="max-w-2/3 flex flex-col gap-10 lg:gap-18 font-objective">
          {renderDescription(propertyDetails?.name_en, propertyDetails?.description_en, "Read More")}

          {propertyDetails?.amenities.length > 0 && (<div className="text-lg">
            <h1 className="text-primary-blue">Features & Amenities ...</h1>

            <div className="flex flex-wrap text-center md:mt-4">
              {propertyDetails.amenities.map((amenity, index) => (
                <div key ={amenity.id} className="p-4 md:w-1/4 w-1/2">
                  <div className="flex-center flex-col border-[1px] border-primary-gray px-4 py-6 rounded-2xl transform transition duration-500 hover:scale-110">
                    <Image
                      src={amenity.icon_picture.virtual_path ||"/icons/ic_building_2.svg"}
                      width={30}
                      height={30}
                      alt={`area-${propertyDetails?.size_sqft}`}
                      className="w-20 h-10"
                    />
                    <p className="leading-relaxed mt-5">{amenity.name_en}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-4 md:mt-10 btn-round max-w-40 text-xs lg:text-base py-3 border-primary-blue">
              See More
            </Button>
          </div>)}

          {/* {renderDescription("Project Information", "", "Read More")} */}
        </div>

        <div className="w-1/3 flex flex-col gap-5 min-w-max">
          <div className="">
            {propertyDetails?.amount && <h1 className="text-2xl lg:text-40px text-primary-green mb-1">{`AED ${IntlNumFormat(propertyDetails?.amount)}`}</h1>}
            {propertyDetails?.reference_number &&  <h3 className="mt-3 text-primary-blue-light text-lg lg:text-xl">{`PROPERTY REF: ${propertyDetails.reference_number}`}</h3>}
          </div>

          <div className="flex flex-col font-satoshi justify-center gap-3">
              {iconText.length > 0 && iconText?.map((item, index)=>(
                (item.label !== "") && (
                  <div key = {index} className="flex gap-3 items-center">
                    <Image
                      src={item.icon}
                      width={24}
                      height={24}
                      alt={`property-${item.label}}`}
                      className="w-6 h-6"
                    />
                    <span className="text-xs lg:text-xl text-primary-violet">{`${item.label}`}</span>
                  </div>)
              ))}

              <div className="mt-11">
                <h4 className="font-satoshi text-primary-blue-light">AGENT</h4>
                <AgentCards agentData={propertyDetails?.agents[0]} direction={'col'} />
              </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="my-16">
          <MapComponent isMarkerShown/>

          <div className="flex items-center justify-between gap-3 mt-3">
            {propertyDetails?.address?.state_province?.name && <div className="flex items-center gap-3">
              <Image
                src={"/icons/ic_location.svg"}
                width={10}
                height={10}
                alt={`area-${propertyDetails?.addres?.state_province?.name}`}
                className="w-5 h-8"
              />
              <p className="text-primary-blue font-satoshi">{propertyDetails?.address?.state_province?.name}</p>
            </div>}

            <Link href="#" className="btn-round max-w-40 text-xs lg:text-base py-3 border-primary-blue">
              Show Map
            </Link>

          </div>
      </div>

      {/* Image Slider */}
      <CustomSwiper scrollbar={false} slidesPerView={propertyDetails?.pictures.length === 1 ? 1 : 1.5} spaceBetween={20}>
          {propertyDetails?.pictures.length > 0 && propertyDetails?.pictures.map((pic,index) => (
            <img
            key={pic.id}
            src={pic?.virtual_path}
            alt={`${pic?.alt_attribute|| propertyDetails?.name_en}-${index}`}
            className="w-full max-w-[800px] h-[300px] object-cover rounded-2xl"
          />
          ))}
      </CustomSwiper>
    </>
  );
};

export default PropertyDetailsSection;
