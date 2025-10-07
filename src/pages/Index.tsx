import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ShopByCollection from "@/components/ShopByCollection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <ShopByCollection />
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Create Your Perfect Invitation?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Explore our collection of beautiful designs or contact us for custom creations
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/products">
                <Button variant="secondary" size="lg">
                  Browse Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
