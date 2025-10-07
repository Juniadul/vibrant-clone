import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Their service was impeccable. I'm very happy with my niece's birth announcement cards",
    author: "Samia Ruponti",
  },
  {
    text: "Undoubtedly, the best in regards to the design and creativity. If you are looking for something elegant and creative, I would highly recommend this page.",
    author: "Ahnaf Razzaque",
  },
  {
    text: "Wonderful services, requested to deliver a bit early, got the delivery one day before. Very pleasant experience. Cards are wonderfully designed and immaculately enveloped. Highly recommended.",
    author: "Shawon Suvro Paul",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-primary">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
