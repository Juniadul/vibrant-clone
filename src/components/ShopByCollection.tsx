import category1 from "@/assets/category-1.jpg";
import category2 from "@/assets/category-2.jpg";
import category3 from "@/assets/category-3.jpg";
import category4 from "@/assets/category-4.jpg";
import category5 from "@/assets/category-5.jpg";

const collections = [
  {
    image: category1,
    title: "Floral Elegance",
    description: "Romantic watercolor designs",
  },
  {
    image: category2,
    title: "Classic Romance",
    description: "Timeless red & blue accents",
  },
  {
    image: category3,
    title: "Royal Opulence",
    description: "Golden ornate patterns",
  },
  {
    image: category4,
    title: "Burgundy Luxe",
    description: "Sophisticated burgundy",
  },
  {
    image: category5,
    title: "Purple Majesty",
    description: "Regal purple designs",
  },
];

const ShopByCollection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-soft">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide">
          Shop By Collection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <a
              key={index}
              href={`/collection/${index + 1}`}
              className="group flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Circular Image */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </div>

              {/* Title & Description */}
              <h3 className="text-base md:text-lg font-semibold text-center mb-1 group-hover:text-primary transition-colors duration-300">
                {collection.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground text-center">
                {collection.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCollection;
