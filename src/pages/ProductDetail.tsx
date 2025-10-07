import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { ArrowLeft, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate('/products')}>Back to Products</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/products')}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-primary mb-6">৳{product.price}</p>
              
              <p className="text-lg text-muted-foreground mb-8">
                {product.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-semibold">Category:</span>
                  <span className="text-muted-foreground capitalize">{product.category.replace('-', ' ')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">Material:</span>
                  <span className="text-muted-foreground">Premium Quality</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">Availability:</span>
                  <span className="text-green-600">In Stock</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  variant="hero"
                  size="lg"
                  className="flex-1 gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button
                  onClick={() => {
                    handleAddToCart();
                    navigate('/cart');
                  }}
                  variant="gradient"
                  size="lg"
                  className="flex-1"
                >
                  Buy Now
                </Button>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Customization Available</h3>
                <p className="text-sm text-muted-foreground">
                  Want to customize this design? Contact us for personalized options including colors, text, and special requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
