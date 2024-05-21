import React from 'react'
import Title from '../Title'
import { AgentCards, Cards, Container, CustomSwiper } from '@/components/shared'
import { PROPERTY_CATEGORIES } from '@/constants/constants'

const LatestListing = () => {

  return (
   <>
     <Container className='mt-13 mb-4 px-30'>
      <div className='md:mb-10'>
        <Title title={"Latest Listing"} 
        description={"We have a magnificent selection of upcoming and new projects that will open your eyes to the future’s potential. These properties make tomorrow worth waiting for."} />
      </div>
    </Container>

    {/* Cards */} 
    <CustomSwiper scrollbar={false} >
      {PROPERTY_CATEGORIES.map((item)=>(
        <Cards properties = {item} link={'/properties/property-details'}>
          <AgentCards agentId={item.agentId} />
        </Cards>
      ))}
    </CustomSwiper>
   </>
  )
}

export default LatestListing