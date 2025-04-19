
import { motion } from "framer-motion";
import { NavMenu } from "@/components/ui/nav-menu";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
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
  ];

  return (
    <div className="min-h-screen">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/8fc95289-cbc4-4c87-a1aa-93d88220f2ff/LI9A3480.JPG"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nice fences. Nice people.
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your local licensed and insured fence contractor
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild size="lg">
                <a href="/contact">Get a Quote</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              It all begins with an idea. To some, a fence may not be just a barrier. Add value and give off the vibe you are looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
