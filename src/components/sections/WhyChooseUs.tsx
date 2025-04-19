import { motion } from "framer-motion";
import { CheckCircle, Award, ThumbsUp, Hammer } from "lucide-react";

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
      title: "Licensed & Insured",
      description: "We're fully licensed and insured in Washington State, giving you complete peace of mind throughout your project."
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Quality Craftsmanship",
      description: "Our skilled professionals deliver superior workmanship and attention to detail on every installation project."
    },
    {
      icon: <ThumbsUp className="h-12 w-12 text-blue-600" />,
      title: "Customer Satisfaction",
      description: "We're committed to exceeding your expectations with responsive service and exceptional results."
    },
    {
      icon: <Hammer className="h-12 w-12 text-blue-600" />,
      title: "Premium Materials",
      description: "We use only top-quality materials that ensure durability, longevity, and aesthetic appeal."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="why-choose-us">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The Infinity Fencing Difference
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover what sets us apart as the premier fencing contractor in North West Washington
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-gray-50 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -ml-48 -mb-48"></div>
    </section>
  );
};
