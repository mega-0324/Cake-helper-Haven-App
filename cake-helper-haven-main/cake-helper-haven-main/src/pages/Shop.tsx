
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronDown } from 'lucide-react';
import CakeCard from '@/components/CakeCard';

// Sample cake data
const allCakes = [
  {
    id: 1,
    name: "Black Forest Cake",
    price: 899,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710029?q=80&w=1000&auto=format&fit=crop",
    category: "Premium"
  },
  {
    id: 2,
    name: "Vanilla Butterscotch",
    price: 799,
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1000&auto=format&fit=crop",
    category: "Classic"
  },
  {
    id: 3,
    name: "Strawberry Delight",
    price: 849,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b19c?q=80&w=1000&auto=format&fit=crop",
    category: "Seasonal"
  },
  {
    id: 4,
    name: "Blueberry Cheesecake",
    price: 949,
    image: "https://images.unsplash.com/photo-1533134242453-f4dcf7e45f5e?q=80&w=1000&auto=format&fit=crop",
    category: "Premium"
  },
  {
    id: 5,
    name: "Red Velvet Cake",
    price: 899,
    image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?q=80&w=1000&auto=format&fit=crop",
    category: "Premium"
  },
  {
    id: 6,
    name: "Chocolate Truffle",
    price: 999,
    image: "https://images.unsplash.com/photo-1560180474-e8563fd75bab?q=80&w=1000&auto=format&fit=crop",
    category: "Premium"
  },
  {
    id: 7,
    name: "Pineapple Cake",
    price: 749,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000&auto=format&fit=crop",
    category: "Classic"
  },
  {
    id: 8,
    name: "Mango Cream Cake",
    price: 849,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
    category: "Seasonal"
  },
  {
    id: 9,
    name: "White Forest Cake",
    price: 849,
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1000&auto=format&fit=crop",
    category: "Classic"
  },
  {
    id: 10,
    name: "Coffee Walnut Cake",
    price: 899,
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=1000&auto=format&fit=crop",
    category: "Premium"
  },
  {
    id: 11,
    name: "Fruit Cake",
    price: 799,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop",
    category: "Classic"
  },
  {
    id: 12,
    name: "Caramel Cake",
    price: 849,
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1000&auto=format&fit=crop",
    category: "Premium"
  }
];

// Available categories
const categories = ["All", "Premium", "Classic", "Seasonal"];

const Shop = () => {
  const [cakes, setCakes] = useState(allCakes);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter and sort cakes
  useEffect(() => {
    let filteredCakes = [...allCakes];
    
    // Filter by search term
    if (searchTerm) {
      filteredCakes = filteredCakes.filter(cake => 
        cake.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filteredCakes = filteredCakes.filter(cake => 
        cake.category === selectedCategory
      );
    }
    
    // Sort cakes
    if (sortBy === 'price-low-high') {
      filteredCakes.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      filteredCakes.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-a-z') {
      filteredCakes.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-z-a') {
      filteredCakes.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setCakes(filteredCakes);
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
              Our Collection
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Shop Cakes</h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore our delicious range of freshly baked cakes for every occasion.
              From traditional flavors to custom creations, find the perfect cake for your celebration.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for cakes..." 
                className="input-field pl-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 space-y-4 md:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Sort Dropdown - Desktop */}
            <div className="hidden md:block relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field py-2 pr-10 appearance-none cursor-pointer"
              >
                <option value="default">Sort by: Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="name-a-z">Name: A to Z</option>
                <option value="name-z-a">Name: Z to A</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            {/* Mobile Filters Button */}
            <div className="md:hidden w-full">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium"
              >
                <span className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter & Sort
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 p-4 bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Sort by</label>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="input-field w-full"
                        >
                          <option value="default">Featured</option>
                          <option value="price-low-high">Price: Low to High</option>
                          <option value="price-high-low">Price: High to Low</option>
                          <option value="name-a-z">Name: A to Z</option>
                          <option value="name-z-a">Name: Z to A</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Cakes Grid */}
          {cakes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cakes.map((cake) => (
                <CakeCard key={cake.id} {...cake} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No cakes found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSortBy('default');
                }}
                className="mt-4 text-primary hover:text-primary/80 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
