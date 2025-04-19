
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const FeaturedProject = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Featured Project
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Custom Cedar Privacy Fence
            </h2>
            <p className="text-gray-600 mb-6">
              This custom cedar privacy fence in Vancouver showcases our commitment to quality craftsmanship and attention to detail. The homeowners wanted a beautiful, durable fence that would provide privacy while enhancing their property's aesthetic appeal.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Premium Western Red Cedar material</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom lattice top design for aesthetic appeal</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Concrete post footings for maximum stability</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom gate with decorative hardware</span>
              </li>
            </ul>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="/portfolio">View More Projects</a>
            </Button>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/8fc95289-cbc4-4c87-a1aa-93d88220f2ff/LI9A3480.JPG" 
                alt="Custom cedar privacy fence project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
              <p className="text-sm font-medium">Completion Time</p>
              <p className="text-xl font-bold">3 Days</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
