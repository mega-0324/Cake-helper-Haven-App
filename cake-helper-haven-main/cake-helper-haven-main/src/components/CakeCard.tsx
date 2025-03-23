
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';

interface CakeCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const CakeCard = ({ id, name, price, image, category }: CakeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  // Use reliable Google image URLs for cakes
  const googleImages = {
    "Chocolate Cake": "https://lh3.googleusercontent.com/pw/AP1GczNBEUeMxqGz9UzEWZVCupHfTZA1uDx1F9I5qiQ8Y4_3nTmwTKvNkO-Hh3Jg5SN9hMqLQUE1UpYAQO1w0d6taBLbpT0Jw-u7TjCPKgRbUm35GbLNVl-D=w2400",
    "Vanilla Cake": "https://lh3.googleusercontent.com/pw/AP1GczNkG4K_x9SfGP9_v3eIVo8Fa31Qiy74rDqYR22IvFy6iVJNyyD2fJsJM2tEF-ggqEcBIxrv64tR71rPT7_AUm9UQqNJ02HICFPeoxFZXkxS0hW8RRiE=w2400",
    "Strawberry Cake": "https://lh3.googleusercontent.com/pw/AP1GczOjhMRByX3Jx2bVm9kySuMUTcNODZOHAiJrszqtFIVcpI0l8wdR2VNvQn39N3EHvNfjcF5pzZt_u9AeNGScXF-ixJwH9g2cE-ZJx0vS8LUQIo-T-3aS=w2400",
    "Red Velvet Cake": "https://lh3.googleusercontent.com/pw/AP1GczP2PB5MNNexNwB5t44bwNVYn3C4Ej4yqBcQQY8ffqsAqyT1XZzB6b8QvI77ICiwi35wJOYCWl5gDrE4OmQCZuSMu5iyDIU9obZ8I7-lC7QvsMXA6Heu=w2400",
    "Black Forest Cake": "https://lh3.googleusercontent.com/pw/AP1GczMe8JLYvUx1yKMnl-x_6yQNhI2kIsk7AEaBjS72A90OHVdJzYD7ulQImYsXrDAC0EOJM_QDIBn3XNKJLP_rCXKDXw1lQ1PcCj7LIQCM0vkD2-Z6uTvA=w2400",
    "default": "https://lh3.googleusercontent.com/pw/AP1GczNgORn7ZdPM3zH0m3g0BKUBQv_rMs7oHLDWkpBDUTnumDyUOyHY-LRZ88N24_jBZ-Qq1kphoZN-62vx3mSfbHs0Q93_ZQZ6lqHXMOd6f-Pp4L1L1b_l=w2400"
  };
  
  // Get the image URL based on cake name or use default
  const getImageUrl = () => {
    const key = Object.keys(googleImages).find(k => 
      name.toLowerCase().includes(k.toLowerCase())
    );
    return key ? googleImages[key] : googleImages.default;
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    addToCart({ id, name, price, image: getImageUrl(), category });
    
    // Show toast notification
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
      duration: 3000,
    });
  };
  
  return (
    <Link to={`/shop/${id}`}>
      <motion.div 
        className="cake-card h-full bg-white shadow-sm rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <img 
            src={getImageUrl()}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-700 ease-out"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://lh3.googleusercontent.com/pw/AP1GczNgORn7ZdPM3zH0m3g0BKUBQv_rMs7oHLDWkpBDUTnumDyUOyHY-LRZ88N24_jBZ-Qq1kphoZN-62vx3mSfbHs0Q93_ZQZ6lqHXMOd6f-Pp4L1L1b_l=w2400";
            }}
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-medium bg-white/70 backdrop-blur-sm rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-1 transition-colors duration-300">{name}</h3>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium text-cake-700">₹{price.toFixed(2)}</p>
            <Button 
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CakeCard;
