import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import BetterIngredients from '@/components/BetterIngredients';
import ImageGrid from '@/components/ImageGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureSection />
      <BetterIngredients />
      <ImageGrid />
      <Footer />
    </div>
  );
}