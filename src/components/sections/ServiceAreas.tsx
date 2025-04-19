
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const ServiceAreas = () => {
  const areas = [
    "Vancouver", "Camas", "Washougal", "Battle Ground", 
    "Ridgefield", "La Center", "Woodland", "Yacolt", 
    "Amboy", "Brush Prairie", "Kalama", "Kelso", "Longview"
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Service Areas
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Where We Serve
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We proudly serve the greater North West Washington area including Clark County and surrounding areas
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={area}
              className="flex items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + 0.3 }}
            >
              <MapPin className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
              <span>{area}, WA</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-300">Not seeing your area? Contact us to check if we service your location!</p>
        </motion.div>
      </div>
    </section>
  );
};
