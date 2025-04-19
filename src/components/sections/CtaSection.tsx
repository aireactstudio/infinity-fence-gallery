
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-8 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Start Your Fencing Project?</h2>
            <p className="text-blue-100 text-lg">Contact us today for a free consultation and quote.</p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <a href="/contact">Get a Free Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <a href="tel:3602001005" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>360.200.1005</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
