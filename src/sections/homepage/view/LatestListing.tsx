import React from 'react'
import Title from '../Title'
import { Container } from '@/components/shared'
import { AGENTS_DETAILS, PROPERTY_CATEGORIES } from '@/constants/constants'
import Cards from '@/components/shared/cards/Cards'
import Image from 'next/image'
import AgentCards from '@/components/shared/cards/AgentCards'

const LatestListing = () => {

  const agentData = AGENTS_DETAILS[0];

  return (
    <Container className='mt-13 mb-4 px-30'>
      <div className='md:mb-10'>
        <Title title={"Latest Listing"} 
        description={"We have a magnificent selection of upcoming and new projects that will open your eyes to the future’s potential. These properties make tomorrow worth waiting for."} />
      </div>
      
      {/* Cards */}
        <div className="flex gap-8">
          {PROPERTY_CATEGORIES.map((prop, index)=>(
              <Cards key={index} properties = {prop}>
                <AgentCards agentData={agentData}/>
              </Cards>
          ))}
        </div>
      
    </Container>
  )
}

export default LatestListing