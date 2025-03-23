
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from "sonner";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate a checkout process
    setTimeout(() => {
      toast.success("Order placed successfully!");
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };
  
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
            <p className="text-lg text-gray-600 mb-4">
              Review your items before checkout
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Items Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      className="flex flex-col sm:flex-row p-4 sm:p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layout
                    >
                      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full sm:w-32 h-32 object-cover rounded-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Cake+Image";
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <p className="text-xl font-medium text-cake-700">₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">{item.category}</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-10 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="p-6 bg-gray-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-2xl font-bold text-cake-700">₹{getCartTotal().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={clearCart}
                      variant="outline"
                      className="sm:flex-1"
                    >
                      Clear Cart
                    </Button>
                    <Button
                      onClick={handleCheckout}
                      className="sm:flex-1"
                      disabled={isCheckingOut}
                    >
                      {isCheckingOut ? 'Processing...' : 'Checkout'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto text-center py-12">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShoppingBag className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-gray-600 mb-6">Looks like you haven't added any cakes to your cart yet.</p>
                <Link to="/shop">
                  <Button>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
