import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/8fc95289-cbc4-4c87-a1aa-93d88220f2ff/LI9A3480.JPG"
          alt="Professional fence installation by Infinity Fencing NW"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <motion.span 
            className="inline-block px-4 py-1 bg-blue-600 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            #1 Fence Contractor in Washington
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nice fences. <span className="text-blue-400">Nice people.</span>
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your local licensed and insured fence contractor serving the greater North West Washington area. Quality craftsmanship and exceptional service guaranteed.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="/contact">Get a Free Quote</a>
            </Button>
          <a
  href="/portfolio"
  style={{
    display: 'inline-block',
    padding: '0.5rem 1rem',
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    border: '1px solid #ffffff',
    background: '#ffffff', // White background
    color: 'blue', // Blue text
    textDecoration: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s, color 0.2s',
  }}
  onMouseOver={(e) => {
    e.target.style.background = '#ffffff'; // White background on hover (unchanged)
    e.target.style.color = '#2563eb'; // blue-600 on hover
  }}
  onMouseOut={(e) => {
    e.target.style.background = '#ffffff'; // Restore white background
    e.target.style.color = 'blue'; // Restore blue text
  }}
>
  View Our Work
</a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 hidden md:flex justify-center">
        <motion.div 
          className="animate-bounce cursor-pointer"
          onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
