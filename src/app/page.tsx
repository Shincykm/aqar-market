import CustomSwiper from '@/components/shared/swiper/CustomSwiper';
import HeroView from '@/sections/hero/view/HeroView';
import LatestListing from '@/sections/homepage/view/LatestListing';

export default function Home() {
  return (
    <main className="w-full">
        <HeroView />

        <LatestListing />

    </main>
  );
}
