
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-semibold text-cake-700">Sweet Delights</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`navbar-link ${isActive('/') ? 'active-link' : ''}`}>
              Home
            </Link>
            <Link to="/shop" className={`navbar-link ${isActive('/shop') ? 'active-link' : ''}`}>
              Shop
            </Link>
            <Link to="/about" className={`navbar-link ${isActive('/about') ? 'active-link' : ''}`}>
              About
            </Link>
            <Link to="/contact" className={`navbar-link ${isActive('/contact') ? 'active-link' : ''}`}>
              Contact
            </Link>
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart" className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <ShoppingBag className="h-5 w-5 text-foreground/80" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="btn-primary py-2 text-sm">
              <User className="h-4 w-4 mr-2 inline" />
              Login
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="p-2 mr-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <ShoppingBag className="h-5 w-5 text-foreground/80" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'max-h-screen' : 'max-h-0 invisible'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="px-4 pt-2 pb-6 space-y-4 bg-white/90 backdrop-blur-md shadow-sm">
          <Link 
            to="/" 
            className={`block py-3 px-4 rounded-xl ${isActive('/') ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className={`block py-3 px-4 rounded-xl ${isActive('/shop') ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}
          >
            Shop
          </Link>
          <Link 
            to="/about" 
            className={`block py-3 px-4 rounded-xl ${isActive('/about') ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`block py-3 px-4 rounded-xl ${isActive('/contact') ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}
          >
            Contact
          </Link>
          <Link 
            to="/login" 
            className="block py-3 px-4 text-center btn-primary"
          >
            <User className="h-4 w-4 mr-2 inline" />
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
