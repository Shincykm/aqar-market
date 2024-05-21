import React from 'react'
import Title from '../Title'
import { Container, CustomSwiper } from '@/components/shared'
import { AGENTS_DETAILS, PROPERTY_CATEGORIES } from '@/constants/constants'

const LatestListing = () => {

  const agentData = AGENTS_DETAILS[0];

  return (
   <>
     <Container className='mt-13 mb-4 px-30'>
      <div className='md:mb-10'>
        <Title title={"Latest Listing"} 
        description={"We have a magnificent selection of upcoming and new projects that will open your eyes to the future’s potential. These properties make tomorrow worth waiting for."} />
      </div>
    </Container>

    {/* Cards */} 
      <CustomSwiper scrollbar={false} data = {PROPERTY_CATEGORIES} agent={true}>
      </CustomSwiper>
   </>
  )
}

export default LatestListing