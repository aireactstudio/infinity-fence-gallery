
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = () => {
  const faqs = [
    {
      question: "How long does it typically take to install a fence?",
      answer: "Installation time varies depending on the type of fence, length, and terrain. A standard residential fence installation typically takes 1-3 days, while more complex projects may take longer. We'll provide you with a timeline during your consultation."
    },
    {
      question: "Do I need permits to install a fence?",
      answer: "Most areas require permits for fence installation. As part of our service, we handle the permit acquisition process, ensuring all local regulations are followed and saving you time and hassle."
    },
    {
      question: "What types of wood do you use for fencing?",
      answer: "We primarily use cedar and pressure-treated pine for our wood fencing, both known for their durability and resistance to decay. Cedar offers natural beauty and weather resistance, while pressure-treated pine provides excellent value and longevity."
    },
    {
      question: "How deep are fence posts installed?",
      answer: "For most residential applications, we install fence posts 24-36 inches deep, depending on local soil conditions, fence height, and building codes. This depth ensures stability and longevity of your fence."
    },
    {
      question: "Do you provide warranties on your work?",
      answer: "Yes, we stand behind our craftsmanship with a comprehensive warranty. Additionally, many of our materials come with manufacturer warranties. We'll provide detailed warranty information specific to your installation."
    },
    {
      question: "Can you install a fence on a slope?",
      answer: "Absolutely! We have extensive experience installing fences on various terrains, including slopes. We use either the step method (fence follows the ground in sections) or racking (fence follows the slope continuously), depending on your preference and the degree of the slope."
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Common Questions About Our Services
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Find answers to frequently asked questions about our fencing services
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href="/contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
