import { fetchProperties } from '@/api/property';
import { HomeHero } from '@/sections/homePage/view';
import BuyProperty from '@/sections/homePage/view/BuyProperty';
import Cities from '@/sections/homePage/view/Cities';
import Communities from '@/sections/homePage/view/Communities';
import LatestListing from '@/sections/homePage/view/LatestListing';
import NewProjects from '@/sections/homePage/view/NewProjects';


export default async function Home() {
  const { data: properties } = await fetchProperties();


  return (
    <main className="w-full">
          <HomeHero />

          <LatestListing properties = {properties}/>

          <NewProjects />

          <Communities />

          <Cities />

          <BuyProperty />
    </main>
  );
}
