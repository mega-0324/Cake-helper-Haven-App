
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Sweet Delights</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Crafting delicious cakes and desserts in Tamil Nadu since 2010. Every creation is made with love and the finest ingredients.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-cake-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-cake-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-cake-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-cake-600 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-cake-600 text-sm transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-cake-600 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-cake-600 text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-cake-600 text-sm transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-cake-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Gandhi Nagar, Erode, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-cake-600 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-sm">+91 9090234345</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-cake-600 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-sm">info@sweetdelights.com</span>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="text-gray-800 font-medium">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-600">Saturday</span>
                <span className="text-gray-800 font-medium">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-600">Sunday</span>
                <span className="text-gray-800 font-medium">10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Sweet Delights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
