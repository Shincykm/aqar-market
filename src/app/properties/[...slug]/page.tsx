import { basicFetch } from '@/api/basicFetch';
import { endpoints } from '@/lib/endpoints';
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
  
  const { data: availableProperties } = await basicFetch(`${endpoints.properties.list}?page=1&limit=20`);

  const { data: properyDetails } = await basicFetch(`${endpoints.properties.details}/${slug[0]}`);

  
  return (
    <>
      <PropertyDetailsSection propertyDetails = {properyDetails}/>

      {/* More Availbale proerties */}
      <LatestListing properties={availableProperties} title="available properties" description=""/>
    </>
  )
}

export default propertyDetailsPage