import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "THE SUMMER SERENADE '25",
    subtitle: "SALE UPTO 80% OFF",
    description: "Your Favourite Wedding Invites Now at a Reimagined Price!",
  },
  {
    image: heroSlide2,
    title: "ROMANTIC ELEGANCE",
    subtitle: "NEW COLLECTION",
    description: "Discover Our Exquisite Wedding Invitation Designs",
  },
  {
    image: heroSlide3,
    title: "LUXURY STATIONERY",
    subtitle: "PREMIUM QUALITY",
    description: "Crafted with Love for Your Special Day",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-muted">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : index < currentSlide
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover animate-zoom-in"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-end px-8 md:px-16 lg:px-24">
            <div
              className={`text-right max-w-xl transition-all duration-700 delay-200 ${
                index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <p className="text-sm md:text-base text-foreground/90 mb-2 uppercase tracking-wider">
                {slide.title}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
                {slide.subtitle}
              </h2>
              <p className="text-base md:text-lg text-foreground/90 mb-6">
                {slide.description}
              </p>
              <Button variant="hero" size="lg" className="uppercase">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-background/60 hover:bg-background/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
