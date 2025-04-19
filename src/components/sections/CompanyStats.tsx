
import { motion } from "framer-motion";
import { Award, ThumbsUp, CheckCircle, Calendar } from "lucide-react";

export const CompanyStats = () => {
  const stats = [
    { 
      icon: <Calendar className="h-10 w-10 text-blue-600" />, 
      value: "10+", 
      label: "Years of Experience" 
    },
    { 
      icon: <ThumbsUp className="h-10 w-10 text-blue-600" />, 
      value: "500+", 
      label: "Satisfied Customers" 
    },
    { 
      icon: <CheckCircle className="h-10 w-10 text-blue-600" />, 
      value: "1000+", 
      label: "Projects Completed" 
    },
    { 
      icon: <Award className="h-10 w-10 text-blue-600" />, 
      value: "100%", 
      label: "Licensed & Insured" 
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
