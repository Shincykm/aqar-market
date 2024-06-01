import { fetchProperties } from '@/api/property';
import { LatestListing } from '@/sections/homePage/view';
import PropertyDetailsSection from '@/sections/propertyDetailsPage/view/PropertyDetailsSection'
import React from 'react'

// export async function generateMetadata({ params }) {
//   const { id } = params;
//   const property = await fetchProperty(id);

//   if (!property) {
//     return { title: 'Property Not Found' };
//   }

//   return { title: property.title };
// }

const propertyDetailsPage = async ({ params }: { params: { slug: string[] } }) => {
  const {slug} = params;
  const { data: availableProperties } = await fetchProperties();
  
  return (
    <>
      <PropertyDetailsSection propertyId = {slug}/>

      {/* More Availbale proerties */}
      <LatestListing properties={availableProperties} title="available properties" description=""/>
    </>
  )
}

export default propertyDetailsPage