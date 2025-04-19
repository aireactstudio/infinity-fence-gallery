
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const services = [
    {
      title: "Wood Fencing",
      description: "Upgrade your property with our expert wood fence installation. We offer custom styles, durable materials, and precise craftsmanship for lasting privacy, security, and curb appeal.",
      image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/8fc95289-cbc4-4c87-a1aa-93d88220f2ff/LI9A3480.JPG"
    },
    {
      title: "Chainlink Fencing",
      description: "Secure your property with our durable chain-link fencing. We provide fast, affordable installation for homes, businesses, and more.",
      image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/8fc95289-cbc4-4c87-a1aa-93d88220f2ff/LI9A3480.JPG"
    },
    {
      title: "Custom Automated Gates",
      description: "Enhance security and convenience with our automated custom gates. We design and install stylish, durable gates tailored to your property.",
      image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/8fc95289-cbc4-4c87-a1aa-93d88220f2ff/LI9A3480.JPG"
    },
    {
      title: "Security Fencing",
      description: "Protect your property with our high-strength security fencing. We provide custom solutions and expert installation for maximum safety and peace of mind.",
      image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/8fc95289-cbc4-4c87-a1aa-93d88220f2ff/LI9A3480.JPG"
    },
    {
      title: "Commercial Fencing",
      description: "Secure your facilities with our reliable commercial and government fencing solutions. We offer durable materials, custom designs, and expert installation.",
      image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/8fc95289-cbc4-4c87-a1aa-93d88220f2ff/LI9A3480.JPG"
    },
    {
      title: "Residential Fencing",
      description: "Transform your home with our beautiful residential fencing options. We create custom solutions that enhance your property's appearance while providing privacy and security.",
      image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/8fc95289-cbc4-4c87-a1aa-93d88220f2ff/LI9A3480.JPG"
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive Fencing Solutions
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            It all begins with an idea. To some, a fence may not be just a barrier. Add value and give off the vibe you are looking for.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="mt-2 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                    <a href="/contact">Request a Quote</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            * Note: We do not install vinyl fencing at this time.
          </p>
        </div>
      </div>
    </section>
  );
};
