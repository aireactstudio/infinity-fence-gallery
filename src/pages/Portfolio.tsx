import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavMenu } from "@/components/ui/nav-menu";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Image, Medal, CheckCircle, Star } from "lucide-react";

const categories = [
  "All",
  "Wood Privacy",
  "Ornamental Iron",
  "Chain Link",
  "Vinyl",
  "Custom Gates",
  "Commercial",
  "Ranch & Farm"
];

const portfolioItems = [
  {
    id: 1,
    title: "Modern Cedar Privacy Fence",
    category: "Wood Privacy",
    image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/9dad1385-298f-4e19-b95a-e96778427887/Screenshot+2025-02-06+at+8.11.13%E2%80%AFPM.png",
    description: "Custom 6' cedar privacy fence with decorative top lattice",
    details: {
      location: "Vancouver, WA",
      duration: "3 days",
      length: "120 linear feet",
      features: ["Premium Western Red Cedar", "Stainless Steel Hardware", "Post Caps", "Concrete Footings"]
    }
  },
  {
    id: 2,
    title: "Ranch Style Split Rail",
    category: "Ranch & Farm",
    image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/acf85770-222c-4233-9419-52ddab0226a6/Screenshot+2025-02-06+at+8.11.08%E2%80%AFPM.png",
    description: "Traditional three-rail split rail fence for large property",
    details: {
      location: "Battle Ground, WA",
      duration: "5 days",
      length: "400 linear feet",
      features: ["Treated Pine Posts", "Custom Gates", "Wire Mesh Backing"]
    }
  },
  {
    id: 3,
    title: "Commercial Security Gate",
    category: "Commercial",
    image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/bd33b3cf-932e-43b9-a0ed-0750a7148b49/Screenshot+2025-02-06+at+8.09.21%E2%80%AFPM.png",
    description: "Automated sliding gate for industrial complex",
    details: {
      location: "Portland, OR",
      duration: "4 days",
      length: "30 feet wide",
      features: ["Access Control System", "Safety Sensors", "High-Security Locks"]
    }
  },
  {
    id: 4,
    title: "Ornamental Iron Estate Gate",
    category: "Ornamental Iron",
    image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/e5bff511-6bb0-4a4f-847a-6ad9d37473fc/Screenshot+2025-02-06+at+8.10.27%E2%80%AFPM.png",
    description: "Custom designed ornamental iron gate with automated opening system",
    details: {
      location: "Lake Oswego, OR",
      duration: "6 days",
      length: "16 feet wide",
      features: ["Custom Ironwork", "Remote Access", "Intercom System"]
    }
  },
  {
    id: 5,
    title: "Chain Link Security Fence",
    category: "Chain Link",
    image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/ea445e4e-4f76-4b30-84ea-d0799fbe6523/Screenshot+2025-02-06+at+8.09.51%E2%80%AFPM.png",
    description: "Commercial grade chain link fence with privacy slats",
    details: {
      location: "Vancouver, WA",
      duration: "4 days",
      length: "300 linear feet",
      features: ["9-gauge wire", "Privacy Slats", "3-strand Barbed Wire"]
    }
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = portfolioItems.filter(item =>
    activeCategory === "All" ? true : item.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-white">
      <NavMenu />

      <section className="relative h-[60vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crafting Exceptional Fencing Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Explore our portfolio of custom fencing projects, showcasing our commitment to quality, 
              craftsmanship, and customer satisfaction across the Pacific Northwest.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Medal className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">150+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Star className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">4.9/5</h3>
              <p className="text-gray-600">Average Rating</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Image className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">Photos Taken</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="min-w-[120px]"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200 mb-2">{item.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-blue-600/80 rounded-full text-xs">
                          {item.details.duration}
                        </span>
                        <span className="px-2 py-1 bg-blue-600/80 rounded-full text-xs">
                          {item.details.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your fencing needs and get a detailed quote for your project.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/contact">Get a Quote</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:3602001005">Call Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
