import { HomeHero } from '@/sections/home-page/view';
import Cities from '@/sections/home-page/view/Cities';
import Communities from '@/sections/home-page/view/Communities';
import LatestListing from '@/sections/home-page/view/LatestListing';
import NewProjects from '@/sections/home-page/view/NewProjects';

export default function Home() {

  return (
    <main className="w-full">
          <HomeHero />

          <LatestListing />

          <NewProjects />

          <Communities />

          <Cities />
    </main>
  );
}
