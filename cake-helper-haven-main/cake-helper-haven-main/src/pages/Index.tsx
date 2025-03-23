
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Welcome to <span className="text-cake-600">Sweet Delights</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Discover the most delicious cakes and pastries, freshly baked with love in Erode, Tamil Nadu.
          </p>
          
          <div className="flex justify-center gap-4">
            <Link to="/shop">
              <Button size="lg" className="bg-cake-600 hover:bg-cake-700">
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczNBEUeMxqGz9UzEWZVCupHfTZA1uDx1F9I5qiQ8Y4_3nTmwTKvNkO-Hh3Jg5SN9hMqLQUE1UpYAQO1w0d6taBLbpT0Jw-u7TjCPKgRbUm35GbLNVl-D=w2400" 
                alt="Chocolate Cake" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Chocolate Cakes</h3>
              <p className="text-gray-600">Our specialty chocolate cakes are rich and decadent.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczP2PB5MNNexNwB5t44bwNVYn3C4Ej4yqBcQQY8ffqsAqyT1XZzB6b8QvI77ICiwi35wJOYCWl5gDrE4OmQCZuSMu5iyDIU9obZ8I7-lC7QvsMXA6Heu=w2400" 
                alt="Red Velvet Cake" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Birthday Cakes</h3>
              <p className="text-gray-600">Custom cakes for your special celebrations.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczMe8JLYvUx1yKMnl-x_6yQNhI2kIsk7AEaBjS72A90OHVdJzYD7ulQImYsXrDAC0EOJM_QDIBn3XNKJLP_rCXKDXw1lQ1PcCj7LIQCM0vkD2-Z6uTvA=w2400" 
                alt="Black Forest Cake" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Wedding Cakes</h3>
              <p className="text-gray-600">Elegant multi-tiered cakes for your special day.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
