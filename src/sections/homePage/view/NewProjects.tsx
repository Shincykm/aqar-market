'use client'
import Link from 'next/link'
import Image from 'next/image'
import Title from '../Title'
import { Cards, Carousel, Container, CustomSwiper } from '@/components/shared'
import { PROPERTY_CATEGORIES, DEVELOPER_DATA } from '@/constants/constants'
import DeveloperCards from '@/components/shared/cards/DeveloperCards'

const  NewProjects = () => {
    
  const renderCardBody = (property, link)=>{
    return (
      <>
      {/* Card body */}
        {/* <Link href={link}>
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
        </Link> */}

      {/* <Link href={"#"}> */}
      {property?.property_type && (
              <div className="overlay p-6 bg-transparent">
                <div className="bg-primary-blue max-w-max px-4 py-2 rounded-lg">
                  <p className="text-white text-xs capitalize">
                    {property.property_type?.name_en}
                  </p>
                </div>
              </div>
            )}

            <div className="capitalize flex flex-col gap-3 py-4 border-b-[1px] border-secondary-gray">
              <div className="min-h-16">
                <h1 className="text-xl text-secondary-blue font-medium">
                  {property?.name_en || "Property Name Unavailable"}
                </h1>
              </div>

              <p className="font-satoshi text-primary-blue">
                Location: {`${property?.address?.country?.name || "Unknown"}`}
              </p>

              <p className={`${property?.amount ? "text-primary-green" : "text-primary-gray"} text-lg font-medium`}>
                {`${property?.amount ? `From AED ${property?.amount}` : "Contact Agent For Price"}`}
              </p>

              <div className="flex font-normal gap-4">
                
                {property?.size_sqft && (<div className="flex gap-1">
                  <Image
                    src="/icons/ic_link.svg"
                    width={16}
                    height={16}
                    alt={`area-${property?.size_sqft}`}
                    className="w-4 h-4"
                  />
                  <span className="text-xs">{`${property?.size_sqft} Sq.Ft`}</span>
                </div>)}

                {property?.count_bedrooms && <div className="flex gap-1">
                  <Image
                    src="/icons/ic_bed.svg"
                    width={16}
                    height={16}
                    alt={`bed-${property?.count_bedrooms}`}
                    className="w-5 h-5"
                  />
                  <span className="text-xs">{`${property?.count_bedrooms
                    } bedrooms`}</span>
                </div>}

                {property?.count_bathrooms && <div className="flex gap-1">
                  <Image
                    src="/icons/ic_accessories.svg"
                    width={16}
                    height={16}
                    alt={`bathrooms-${property?.count_bathrooms}}`}
                    className="w-4 h-4"
                  />
                  <span className="text-xs">{`${property?.count_bathrooms
                    } bathrooms`}</span>
                </div>}
              </div>
            </div>
            {/* </Link> */}
      </>
    );
  }

  return (
   <section className='home-page'>
     <Container className='mb-4 px-30'>
      <div className='md:mb-10'>
        <Title title={"New Projects"} 
        description={"We have a magnificent selection of upcoming and new projects that will open your eyes to the future’s potential. These properties make tomorrow worth waiting for."} />
      </div>
    </Container>

    {/* Cards */} 
    <CustomSwiper scrollbar={true} slidesPerView={2.5} spaceBetween={30}>
      {PROPERTY_CATEGORIES.map((item, index)=>(
        <Cards key={index} width={"max-w-[600px]"}>
          <Carousel images={item?.pictures}/> 
          {renderCardBody(item,`/properties/property-details/${item.id}`)}
          <DeveloperCards developerData={DEVELOPER_DATA[0]} />
        </Cards>
      ))}
    </CustomSwiper>

    <div className="flex items-center justify-between description px-30 pt-20">
        <p>Why not explore all of the communities on offer and find the lifestyle of your dreams?</p>

        <Link href={"#"} className='btn-round border-primary-blue'><p>See More</p></Link>
    </div>
   </section>
  )
}

export default NewProjects;