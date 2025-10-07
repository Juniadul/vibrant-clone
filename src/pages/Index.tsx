import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ShopByCollection from "@/components/ShopByCollection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <ShopByCollection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
