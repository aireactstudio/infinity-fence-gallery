
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const PortfolioPreview = () => {
  // Updated projects array with real images
  const projects = [
    {
      id: 1,
      title: "Cedar Privacy Fence",
      category: "Wood Fencing",
      image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/9dad1385-298f-4e19-b95a-e96778427887/Screenshot+2025-02-06+at+8.11.13%E2%80%AFPM.png"
    },
    {
      id: 2,
      title: "Commercial Security Fence",
      category: "Commercial Fencing",
      image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/acf85770-222c-4233-9419-52ddab0226a6/Screenshot+2025-02-06+at+8.11.08%E2%80%AFPM.png"
    },
    {
      id: 3,
      title: "Custom Driveway Gate",
      category: "Custom Gates",
      image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/bd33b3cf-932e-43b9-a0ed-0750a7148b49/Screenshot+2025-02-06+at+8.09.21%E2%80%AFPM.png"
    },
    {
      id: 4,
      title: "Chain-link Security Fence",
      category: "Chainlink Fencing",
      image: "https://images.squarespace-cdn.com/content/v1/66c2c28f479f4e282893a91b/ea445e4e-4f76-4b30-84ea-d0799fbe6523/Screenshot+2025-02-06+at+8.09.51%E2%80%AFPM.png"
    }
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ["all", ...new Set(projects.map(project => project.category))];

  return (
    <section className="py-24 bg-gray-50" id="portfolio-preview">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Work
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Browse through a selection of our recent fencing installations
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                <p className="text-blue-200 text-sm">{project.category}</p>
              </div>
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
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="/portfolio">View Full Portfolio</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
