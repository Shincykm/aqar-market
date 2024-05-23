"use client";
import React, { useEffect, useState } from 'react'
import Title from '../Title'
import { AgentCards, Cards, Carousel, Container, CustomSwiper } from '@/components/shared'
import { AGENTS_DETAILS, PROPERTY_CATEGORIES } from '@/constants/constants'
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

const  LatestListing = () => {
  const [propertyList, setPropertyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchPropertyList = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://aqar.api.mvp-apps.ae/api/admin/property/getPropertyList`);
        setPropertyList(res.data?.data);
      } catch (error) {
        console.log(error,"==getpropertylist");
      } finally{
        setLoading(false);
      }
    };

    fetchPropertyList();
  }, []); 

  const renderCardBody = (property, link)=>{
    return (
      <>
          {/* Card body */}
      <Link href={link}>
      {property?.property_type && (<div className="overlay p-6 bg-transparent max-w-[400px]">
        <div className="bg-primary-blue max-w-max px-4 py-2 rounded-lg">
         <p className='text-white text-xs'>{property?.property_type}</p>
        </div>
      </div>)}
      
      <div className="flex flex-col gap-3 py-4 border-b-[1px] border-secondary-gray">
        <h1 className='text-xl text-secondary-blue font-medium'>{property?.name_en}</h1>
        <p className='font-satoshi text-primary-blue'>Location: {property?.address}</p>
        <p className='text-primary-green text-lg font-medium'>From AED {property?.amount}</p>

        <div className="flex font-normal gap-4">
          <div className="flex gap-1">
            <Image src="/icons/ic_link.svg" width={16} height={16} alt={`area-${property?.size_sqft}`} className="w-4 h-4"/>
            <span className='text-xs'>{`${property?.size_sqft || 0} Sq.Ft`}</span>
          </div>
          <div className="flex gap-1">
            <Image
              src="/icons/ic_bed.svg"
              width={16}
              height={16}
              alt={`bed-${property?.count_bedrooms}`}
              className="w-5 h-5"
            />
            <span className="text-xs">{`${property?.count_bathrooms || 0} bedrooms`}</span>
          </div>

          <div className="flex gap-1">
            <Image src="/icons/ic_accessories.svg" width={16} height={16} alt={`bathrooms-${property?.accessories}`} className="w-4 h-4" />
            <span className='text-xs'>{`${property?.count_bathrooms || 0} bathrooms`}</span>
          </div>
        </div>
      </div>
      </Link>
      </>
    );
  }

  return (
    <>
     <Container className='mt-13 mb-4 px-30'>
      <div className='md:mb-10'>
        <Title title={"Latest Listing"} 
        description={"We have a magnificent selection of upcoming and new projects that will open your eyes to the future’s potential. These properties make tomorrow worth waiting for."} />
      </div>
    </Container>

    {/* Cards */} 
    <CustomSwiper scrollbar={false} slidesPerView={3} spaceBetween={10}>
      {PROPERTY_CATEGORIES.map((item, index)=>(
        <Cards key={index} width='max-w-[400px]'>
          <Carousel images={item?.pictures}/> 
          {/* {renderCardBody(item,`/properties/property-details/${item.id}`)} */}
          {renderCardBody(item,`#`)}
          {/* <AgentCards agentData={item.agent} /> */}
          <AgentCards agentData={AGENTS_DETAILS[0]} />
        </Cards>
      ))}
    </CustomSwiper>
   </>
  )
}

export default LatestListing;