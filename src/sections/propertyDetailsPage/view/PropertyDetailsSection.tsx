// 'use client';
// import { endpoints } from '@/lib/endpoints';
// import { slugify } from '@/utils/slugify';
// import { useRouter } from 'next/navigation';

// const PropertyDetailsSection = ({ propertyDetails }) => {
//   const router = useRouter ();
//   const { id, slug } = router.query;
//   console.log(id, slug);

//   return (
//     <div className="flex flex-col">
//       <div className="flex-2">
//         <h1>{propertyDetails.title}</h1>
//         <p>{propertyDetails.description}</p>
//       </div>
//       <div className="flex-1"></div>
//     </div>
//   )
// };

// export async function getServerSideProps(context) {
//   const { id, slug } = context.params;

//   // Fetch propertyDetails details using the id
//   const res = await fetch(`${endpoints.properties.details}/${id}`);
//   const propertyDetails = await res.json();

//   const correctSlug = slugify(propertyDetails.title);
//   // Redirect if the slug in the URL is incorrect
//   if (slug !== correctSlug) {
//     return {
//       redirect: {
//         destination: `/properties/${id}/${correctSlug}`,
//         permanent: true,
//       },
//     };
//   }

//   return {
//     props: {
//       propertyDetails
//     }
//   };
// }

// export default PropertyDetailsSection

// app/properties/[id]/[slug]/page.js


'use client';
import { fetchProperties } from "@/api/property";
import MapComponent from "@/components/maps/Map";
import { AgentCards, Button, Cards, Carousel, CustomSwiper } from "@/components/shared";
import { endpoints } from "@/lib/endpoints";
import { LatestListing } from "@/sections/homePage/view";
import { IntlNumFormat } from "@/utils/intNumFormat";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// -----------------------------------------------------------------
const response = {
  "status": "success",
  "message": "Property found",
  "data": {
      "id": 40,
      "name_en": "High End Penthouse with Exceptional Finishes",
      "name_ar": "بنتهاوس راقي بتشطيبات استثنائية",
      "description_ar": "يتوزع هذا البنتهاوس الفاخر على أربعة مستويات، ويحتوي على تراس على السطح من طابقين مع مسبح خاص. كبير الحجم وجذاب الطراز، وتصميم أنيق وعصري.",
      "description_en": "Spread over four levels, this luxury penthouse features a two-level rooftop terrace with a private lap pool. Vast in size and inviting in style, the chic and modern design.",
      "active": true,
      "is_featured": true,
      "is_furnished": false,
      "count_bathrooms": "4",
      "count_bedrooms": "5",
      "count_parking": null,
      "maintenance_fee": null,
      "old_amount": null,
      "amount": "58996.00",
      "size_sqm": "8413.00",
      "size_sqft": null,
      "ownership": null,
      "sub_type": null,
      "reference_number": "40695",
      "constructed_date": null,
      "address_id": "57",
      "building_id": null,
      "property_type_id": "10",
      "property_purpose_id": "4",
      "property_style_id": null,
      "country_id": "1",
      "state_province_id": "1",
      "city_id": "7",
      "display_order": null,
      "property_type": {
          "id": 10,
          "name_en": "pentahouse",
          "name_ar": null,
          "description_en": "penthouse - propertyDetails type 3",
          "description_ar": null,
          "parent_id": "0",
          "created_at": "2024-05-14T05:24:34.000000Z",
          "updated_at": "2024-05-14T05:24:34.000000Z",
          "deleted_at": null
      },
      "pictures": [
          {
              "id": 43,
              "mime_type": "image/jpeg",
              "seo_filename": "modern-residential-district-with-green-roof-balcony-generated-by-ai.jpg",
              "alt_attribute": null,
              "title_attribute": null,
              "is_new": false,
              "virtual_path": "https://cdn.maxhomeproperty.com/storage/cdn/SA5almC0TNiohC72kd4RklnKqWoVHAsjl5gxuvYH.jpg",
              "created_at": "2024-05-31T04:59:57.000000Z",
              "updated_at": "2024-05-31T04:59:57.000000Z",
              "pivot": {
                  "property_id": "40",
                  "picture_id": "43",
                  "id": "37"
              }
          },
          {
              "id": 47,
              "mime_type": "image/png",
              "seo_filename": "image 6 (1).png",
              "alt_attribute": null,
              "title_attribute": null,
              "is_new": false,
              "virtual_path": "https://cdn.maxhomeproperty.com/storage/cdn/iVOCUoGal988tqOxljAHKMpxQlGCO2mj17kZirDz.png",
              "created_at": "2024-05-31T14:13:43.000000Z",
              "updated_at": "2024-05-31T14:13:43.000000Z",
              "pivot": {
                  "property_id": "40",
                  "picture_id": "47",
                  "id": "41"
              }
          }
      ],
      "agents": [],
      "amenities": [
          {
              "id": 12,
              "name_en": "Gym",
              "name_ar": "Gym-ar",
              "icon": 9,
              "created_at": "2024-05-20T07:42:52.000000Z",
              "updated_at": "2024-05-22T06:42:26.000000Z",
              "pivot": {
                  "property_id": "40",
                  "amenity_id": "12",
                  "id": "30"
              },
              "icon_picture": {
                  "id": 9,
                  "mime_type": "image/svg+xml",
                  "seo_filename": "Group (2).svg",
                  "alt_attribute": null,
                  "title_attribute": null,
                  "is_new": false,
                  "virtual_path": "https://cdn.maxhomeproperty.com/storage/cdn/SMxQidGIRd3ErgS0yYhhJimG4RMI0MiFu9S8jzCT.svg",
                  "created_at": "2024-05-22T06:42:26.000000Z",
                  "updated_at": "2024-05-22T06:42:26.000000Z"
              },
              "pictures": []
          },
          {
              "id": 11,
              "name_en": "pool",
              "name_ar": "pool-ar",
              "icon": 8,
              "created_at": "2024-05-16T14:49:20.000000Z",
              "updated_at": "2024-05-16T14:49:21.000000Z",
              "pivot": {
                  "property_id": "40",
                  "amenity_id": "11",
                  "id": "31"
              },
              "icon_picture": {
                  "id": 8,
                  "mime_type": "image/svg+xml",
                  "seo_filename": "Group 515257.svg",
                  "alt_attribute": null,
                  "title_attribute": null,
                  "is_new": false,
                  "virtual_path": "https://cdn.maxhomeproperty.com/storage/cdn/3JBP0s4Y0XdcjRugrjAJwzL6wAVbTip9j0gByJgZ.svg",
                  "created_at": "2024-05-16T14:49:21.000000Z",
                  "updated_at": "2024-05-16T14:49:21.000000Z"
              },
              "pictures": []
          }
      ],
      "address": {
          "id": 57,
          "country_id": "1",
          "city_id": "7",
          "state_province_id": "1",
          "first_name": "High End Penthouse with Exceptional Finishes",
          "last_name": "High End Penthouse with Exceptional Finishes",
          "nickname": null,
          "latitude": null,
          "longitude": null,
          "address1": null,
          "address2": null,
          "company": null,
          "email": null,
          "fax_number": null,
          "phone_number": null,
          "zip_postal_code": null,
          "custom_attributes": null,
          "created_at": "2024-05-31T04:59:56.000000Z",
          "updated_at": "2024-05-31T05:07:15.000000Z",
          "deleted_at": null,
          "city": {
              "id": 7,
              "name_en": "abudhabi city",
              "name_ar": null,
              "country_id": "1",
              "state_province_id": "1",
              "active": "1",
              "is_capital": "0",
              "is_featured": "0",
              "timezone": null,
              "latitude": "25.266666",
              "longitude": "55.316666",
              "created_at": "2024-05-29T09:57:23.000000Z",
              "updated_at": "2024-05-29T09:57:23.000000Z"
          },
          "country": {
              "id": 1,
              "name": "UAE",
              "two_letter_iso_code": null,
              "three_letter_iso_code": null,
              "allows_billing": "1",
              "allows_shipping": "0",
              "numeric_iso_code": "1",
              "subject_to_vat": "0",
              "published": "1",
              "display_order": "0",
              "created_at": "2024-05-24T06:48:45.000000Z",
              "updated_at": "2024-05-24T06:48:45.000000Z"
          },
          "state_province": {
              "id": 1,
              "name": "Abu dhabi city",
              "abbreviation": null,
              "country_id": "1",
              "published": "1",
              "display_order": "1",
              "latitude": "24.12",
              "longitude": "56.42",
              "created_at": "2024-05-24T12:52:22.000000Z",
              "updated_at": "2024-05-24T12:52:22.000000Z"
          }
      }
  }
};

// ------------------------------------------------------

// async function fetchProperty(id) {
//   const res = await fetch(`${endpoints?.properties?.details}/${id}`);
//   if (!res.ok) {
//     return null;
//   }
//   return await res.json();
// }

const PropertyDetailsSection = async ({ propertyId }) => {
  const { data: propertyDetails } = response;

  const iconText = [
    {
      label : propertyDetails?.amount ? `AED ${propertyDetails?.amount}` : "",
      icon : "/icons/ic_home.svg"
    },
    {
      label : propertyDetails?.amount ? `AED ${propertyDetails?.amount}` : "",
      icon : "/icons/ic_home.svg"
    },
    {
      label : propertyDetails?.amount ? `AED ${propertyDetails?.amount}` : "",
      icon : "/icons/ic_home.svg"
    },
    {
      label : propertyDetails?.amount ? `AED ${propertyDetails?.amount}` : "",
      icon : "/icons/ic_home.svg"
    },
  ];

  const renderDescription = (title, description, btnText="") =>{
    return (
      <div className="w-2/3">
        <h1 className="text-2xl lg:text-40px text-primary-violet leading-relaxed">
          {title || "Property Not Available"}
        </h1>
        {description && <div className="mb-6">
          <p className="lg:text-xl text-ternary-gray mb-5 md:mb-14">
            {description}
          </p>
          {btnText && <Button className="btn-round max-w-44 text-xs lg:text-base py-3 border-primary-blue">
            {btnText}
          </Button>}
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

          <div className="text-lg">
            <h1 className="text-primary-blue">Features & Amenities ...</h1>

            <div className="flex flex-wrap text-center md:mt-4">
              {propertyDetails?.amenities.length > 0 && 
                propertyDetails.amenities.map((amenity, index) => (
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
          </div>

          {/* {renderDescription("Project Information", "", "Read More")} */}
        </div>

        <div className="w-1/3 flex flex-col gap-5 min-w-max">
          <div className="">
            <h1 className="text-2xl lg:text-40px text-primary-green mb-1">{}</h1>
            propertyDetails?.reference_number &&  <h3 className="text-primary-blue-light text-lg lg:text-xl">{`PROPERTY REF: ${IntlNumFormat(propertyDetails.reference_number)}`}</h3>
          </div>

          <div className="flex flex-col font-satoshi">
              <div className="flex gap-1">
                <Image
                  src={"/icons/ic_home.svg"}
                  width={16}
                  height={16}
                  alt={`property-${propertyDetails?.property_type?.name_en}}`}
                  className="w-4 h-4"
                />
                <span className="text-xs lg:text-xl text-primary-violet">{`${propertyDetails?.property_type?.name_en}`}</span>
              </div>

              <div className="flex gap-1">
                <Image
                  src="/icons/ic_link.svg"
                  width={16}
                  height={16}
                  alt={`area-${propertyDetails?.size_sqft}`}
                  className="w-4 h-4"
                />
                <span className="text-xs">{`${propertyDetails?.size_sqft} Sq.Ft`}</span>
              </div>

              <div className="flex gap-1">
                <Image
                  src="/icons/ic_bed.svg"
                  width={16}
                  height={16}
                  alt={`bed-${propertyDetails?.count_bedrooms}`}
                  className="w-5 h-5"
                />
                <span className="text-xs">{`${propertyDetails?.count_bedrooms} bedrooms`}</span>
              </div>

              <div className="flex gap-1">
                <Image
                  src="/icons/ic_accessories.svg"
                  width={16}
                  height={16}
                  alt={`bathrooms-${propertyDetails?.count_bathrooms}}`}
                  className="w-4 h-4"
                />
                <span className="text-xs">{`${propertyDetails?.count_bathrooms} bathrooms`}</span>
              </div>

              {propertyDetails?.agents[0] && <div className="">
                <h4>AGENT</h4>
                <AgentCards agentData={propertyDetails?.agents[0]} />
              </div>}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="my-16">
          <MapComponent isMarkerShown/>

          <div className="flex items-center justify-between gap-3 mt-3">
            <div className="flex items-center gap-3">
              <Image
                src={"/icons/ic_location.svg"}
                width={10}
                height={10}
                alt={`area-${propertyDetails?.size_sqft}`}
                className="w-5 h-8"
              />
              <p className="text-primary-blue font-satoshi">{propertyDetails?.address?.state_province?.name}</p>
            </div>

            <Link href="#" className="btn-round max-w-40 text-xs lg:text-base py-3 border-primary-blue">
              Show Map
            </Link>

          </div>
      </div>

      {/* Image Slider */}
      <CustomSwiper scrollbar={false} slidesPerView={1.5} spaceBetween={10}>
          {propertyDetails?.pictures.length > 0 && propertyDetails?.pictures.map((pic,index) => (
            <img
            src={pic?.virtual_path}
            alt={`${pic?.alt_attribute|| propertyDetails?.name_en}-${index}`}
            className="w-full h-[300px] object-cover rounded-2xl"
          />
          ))}
      </CustomSwiper>
    </>
  );
};

export default PropertyDetailsSection;
