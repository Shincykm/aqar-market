import { fetchProperties, fetchPropertyById } from '@/lib/api/property';
import { LatestListing } from '@/sections/homePage/view';
import PropertyDetailsSection from '@/sections/propertyDetailsPage/view/PropertyDetailsSection'

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
  const { data: properyDetails } = await fetchPropertyById(slug[0]);

  
  return (
    <>
      <PropertyDetailsSection propertyDetails = {properyDetails}/>

      {/* More Availbale proerties */}
      <LatestListing properties={availableProperties} title="available properties" description=""/>
    </>
  )
}

export default propertyDetailsPage