
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Vancouver, WA",
      testimonial: "Infinity Fencing NW transformed our backyard with a beautiful cedar fence. The team was professional, efficient, and the quality of work exceeded our expectations. Highly recommend!",
      rating: 5
    },
    {
      name: "Mike Anderson",
      location: "Camas, WA",
      testimonial: "Great experience from start to finish. The automated gate they installed is not only functional but adds a touch of elegance to our property. Fair pricing and excellent craftsmanship.",
      rating: 5
    },
    {
      name: "Jennifer Lewis",
      location: "Battle Ground, WA",
      testimonial: "We needed a secure fence for our business property, and Infinity Fencing delivered perfectly. The work was completed on time and within budget. Will definitely use them again.",
      rating: 5
    },
    {
      name: "David Thompson",
      location: "Ridgefield, WA",
      testimonial: "The chainlink fence they installed is sturdy and exactly what we needed for our dog run. The crew was respectful of our property and cleaned up thoroughly after completion.",
      rating: 5
    },
    {
      name: "Emily Parker",
      location: "Washougal, WA",
      testimonial: "From the initial consultation to the final installation, everything was handled professionally. Our new wood fence is beautiful and has significantly enhanced our privacy.",
      rating: 5
    }
  ];

  const renderStars = (count) => {
    return Array(count)
      .fill(0)
      .map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Customer Reviews
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Don't just take our word for it — hear from our satisfied customers
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-5xl"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      <blockquote className="text-gray-700 mb-4 flex-grow">
                        "{testimonial.testimonial}"
                      </blockquote>
                      <div className="mt-auto">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 gap-2">
              <CarouselPrevious className="relative inline-flex static" />
              <CarouselNext className="relative inline-flex static" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
