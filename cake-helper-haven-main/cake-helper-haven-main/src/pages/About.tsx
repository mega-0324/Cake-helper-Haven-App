
import { motion } from 'framer-motion';
import { Award, Users, Heart, CakeSlice } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Sweet Delights</h1>
            <p className="text-lg text-gray-600 mb-8">
              Creating sweet memories one cake at a time. We're passionate about bringing joy 
              to your celebrations with our handcrafted, delicious creations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                Our Journey
              </span>
              <h2 className="text-3xl font-bold mb-4">A Sweet Beginning</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010 in the heart of Erode, Tamil Nadu, Sweet Delights started as a small family-owned bakery with a big dream: to create the most delicious and beautiful cakes in the region.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Mrs. Lakshmi, began baking cakes from her home kitchen, using traditional recipes passed down through generations. What started as a passion project quickly grew into a beloved local bakery as word spread about her exceptional creations.
              </p>
              <p className="text-gray-600">
                Today, we've grown into a full-service bakery with a team of skilled pastry chefs, but we've never lost touch with our roots. Every cake still receives the same care, attention to detail, and love that Mrs. Lakshmi put into her very first creations.
              </p>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1464349095431-e9a21285b19c?q=80&w=1000&auto=format&fit=crop" 
                alt="Our Bakery" 
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
              What Drives Us
            </span>
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">
              At the heart of everything we do are core principles that guide our work and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                We never compromise on ingredients or methods. Each cake is made with premium components for exceptional taste.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600 text-sm">
                Baking isn't just our job—it's our passion. We pour our hearts into every creation we make.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CakeSlice className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creativity</h3>
              <p className="text-gray-600 text-sm">
                We approach each cake as a unique canvas, blending artistry with flavor to create edible masterpieces.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                We're proud to be part of Erode's community, supporting local events and creating sweet moments for our neighbors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
              Meet Our Team
            </span>
            <h2 className="text-3xl font-bold mb-4">The People Behind the Cakes</h2>
            <p className="text-gray-600">
              Our talented team combines years of experience with a passion for baking and cake decoration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" 
                alt="Lakshmi - Founder & Head Baker" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Lakshmi Subramaniam</h3>
                <p className="text-primary font-medium mb-3">Founder & Head Baker</p>
                <p className="text-gray-600 text-sm">
                  With over 25 years of baking experience, Lakshmi's passion for creating exceptional cakes has been the foundation of Sweet Delights.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Raj - Master Decorator" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Raj Patel</h3>
                <p className="text-primary font-medium mb-3">Master Decorator</p>
                <p className="text-gray-600 text-sm">
                  A true artist, Raj transforms simple cakes into works of art with his incredible decoration skills and attention to detail.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                alt="Priya - Pastry Chef" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Priya Chandran</h3>
                <p className="text-primary font-medium mb-3">Head Pastry Chef</p>
                <p className="text-gray-600 text-sm">
                  Trained in French patisserie, Priya brings international techniques and flavors to our local Indian bakery creations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop" 
                alt="Award-winning cakes" 
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                Our Achievements
              </span>
              <h2 className="text-3xl font-bold mb-4">Excellence Recognized</h2>
              <p className="text-gray-600 mb-6">
                Over the years, our dedication to quality and creativity has been recognized with various awards and accolades.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="p-1 bg-primary/10 rounded-full mr-3 mt-0.5">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Best Bakery in Erode</h3>
                    <p className="text-sm text-gray-600">Awarded by Tamil Nadu Food Association, 2022</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-primary/10 rounded-full mr-3 mt-0.5">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Most Creative Wedding Cake Design</h3>
                    <p className="text-sm text-gray-600">Southern India Wedding Expo, 2021</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-primary/10 rounded-full mr-3 mt-0.5">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Best Customer Service</h3>
                    <p className="text-sm text-gray-600">Erode Business Excellence Awards, 2020</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
