
import { motion } from "framer-motion";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your needs, preferences, and budget to understand your vision for the perfect fence."
    },
    {
      number: "02",
      title: "Site Assessment",
      description: "Our team visits your property to take measurements and evaluate the terrain for the best installation approach."
    },
    {
      number: "03",
      title: "Detailed Quote",
      description: "We provide a comprehensive, transparent quote with all costs clearly outlined - no hidden fees."
    },
    {
      number: "04",
      title: "Professional Installation",
      description: "Our skilled team installs your fence with precision and care, ensuring lasting quality and appearance."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            How We Work
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our streamlined process ensures a smooth experience from consultation to completion
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative p-6 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <svg className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-600 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700" asChild size="lg">
            <a href="/contact">Start Your Project Today</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
