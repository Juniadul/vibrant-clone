import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      {/* Top Bar */}
      <div className="bg-gradient-hero text-primary-foreground py-2 px-4 text-center text-sm">
        FREE GROUND SHIPPING FOR MORE THAN $99 PIECES OF ORDER
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        {/* Mobile Menu Button */}
        <div className="flex items-center justify-between lg:hidden mb-4">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </div>
        </div>

        {/* Logo and Search */}
        <div className="flex items-center justify-between gap-8">
          {/* Search - Desktop */}
          <div className="hidden lg:flex items-center gap-2 flex-1 max-w-xs">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 bg-muted border-border"
              />
            </div>
          </div>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-3xl md:text-4xl font-serif text-center bg-gradient-hero bg-clip-text text-transparent">
              SAVE THE DATE
            </h1>
            <p className="text-xs text-center text-muted-foreground uppercase tracking-wider">
              Bespoke Invitations
            </p>
          </Link>

          {/* Account & Cart - Desktop */}
          <div className="hidden lg:flex items-center gap-4 flex-1 justify-end max-w-xs">
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="gap-2 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-sm">({getTotalItems()})</span>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-5 w-5" />
              <span className="text-sm">ACCOUNT</span>
            </Button>
          </div>
        </div>

        {/* Search - Mobile */}
        <div className="lg:hidden mt-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 bg-muted border-border"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block mt-6`}>
          <ul className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 text-sm uppercase tracking-wider">
            <li>
              <Link to="/" className="hover:text-primary transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-primary transition-colors duration-300">
                Shop Products
              </Link>
            </li>
            <li>
              <Link to="/story" className="hover:text-primary transition-colors duration-300">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition-colors duration-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-primary transition-colors duration-300">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
