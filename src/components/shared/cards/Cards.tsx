import React from 'react'
import Container from '../container/Container'
import Carousel from '../carousel/Carousel'
import Image from 'next/image';
import { PROPERTY_TYPES } from '@/constants/constants';

const Cards = ({children, ...props}) => {
  const {properties} = props;

  const propertyTypeData = PROPERTY_TYPES[0];

  return (
    <Container className="border-[1px] border-primary-gray p-3 rounded-md max-w-[400px]">
        <Carousel images={properties.images}/>  
      <div className="overlay p-6 bg-transparent">
        <div className="bg-primary-blue max-w-max px-4 py-2 rounded-lg">
         <p className='text-white text-xs'>{propertyTypeData.name_en}</p>
        </div>
      </div>
      
      {/* Card body */}
      <div className="flex flex-col gap-3 py-4 border-b-[1px] border-secondary-gray">
        <h1 className='text-xl text-secondary-blue font-medium'>{properties.title}</h1>
        <p className='font-satoshi text-primary-blue'>Location: {properties.location}</p>
        <p className='text-primary-green text-lg font-medium'>From AED {properties.startingPrice}</p>

        <div className="flex font-normal gap-8">
          <div className="flex gap-2">
            <Image src="/icons/ic_link.svg" width={16} height={16} alt={`area-${properties.area}`} className="w-4 h-4"/>
            <span className='text-xs'>{`${properties.area} Sq.Ft`}</span>
          </div>
          <div className="flex gap-2">
            <Image
              src="/icons/ic_bed.svg"
              width={16}
              height={16}
              alt={`bed-${properties.bedrooms}`}
              className="w-4 h-4"
            />
            <span className="text-xs">{`${properties.beds} bedrooms`}</span>
          </div>

          <div className="flex gap-2">
            <Image src="/icons/ic_accessories.svg" width={16} height={16} alt={`bathrooms-${properties.accessories}`} className="w-4 h-4" />
            <span className='text-xs'>{`${properties.baths} bathrooms`}</span>
          </div>
        </div>
      </div>

      {/* Agent / Builder */}
      {children}
    </Container>
  )
}

export default Cards