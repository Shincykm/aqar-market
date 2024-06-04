import { HomeHero } from '@/sections/homePage/view';
import BuyProperty from '@/sections/homePage/view/BuyProperty';
import Cities from '@/sections/homePage/view/Cities';
import Communities from '@/sections/homePage/view/Communities';
import LatestListing from '@/sections/homePage/view/LatestListing';
import NewProjects from '@/sections/homePage/view/NewProjects';
import { basicFetch } from '@/api/basicFetch';
import { endpoints } from '@/lib/endpoints';


export default async function Home() {
  const { data: properties} = await basicFetch(endpoints.properties.list);

  return (
    <main className="w-full">
          <HomeHero />

          <div className="lg:px-30">
            <LatestListing title = "latest properties" properties = {properties}/>
          </div>

          <NewProjects />

          <Communities />

          <Cities />

          <BuyProperty />
    </main>
  );
}
