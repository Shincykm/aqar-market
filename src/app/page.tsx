import { HomeHero } from '@/sections/home-page/view';
import LatestListing from '@/sections/home-page/view/LatestListing';

export default function Home() {
  return (
    <main className="w-full">
        <HomeHero />

        <LatestListing />

    </main>
  );
}
