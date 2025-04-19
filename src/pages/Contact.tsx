
import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react"; // Add this import for the icons
import { NavMenu } from "@/components/ui/nav-menu";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    loading: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        loading: false
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contact us today for a free quote on your fencing project
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input 
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <Input 
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    placeholder="(360) 200-1005"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={formState.loading}>
                  {formState.loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Hours of Operation</h3>
                  <p className="text-gray-600">Daily: 8:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:3602001005" className="hover:text-blue-600 transition">
                      360.200.1005
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:build@infinityfencingnw.com" className="hover:text-blue-600 transition">
                      build@infinityfencingnw.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Service Area</h3>
                  <p className="text-gray-600">
                    We proudly serve the greater North West Washington area including Clark County and surrounding areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/infinityfencingnw/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://www.youtube.com/@InfinityFencingNW" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition">
                      <Youtube className="w-6 h-6" />
                    </a>
                    <a href="https://www.tiktok.com/@infinityfencingnw" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.321 5.562a5.122 5.122 0 0 1 .244 5.085A5.269 5.269 0 0 1 17 13.164V6.562h2.321zM17 5.562V2h-2v11.164a3.002 3.002 0 0 1-4.583 2.532 3.002 3.002 0 0 1-1.417-4l-1.732-1a5.002 5.002 0 0 0 9.732.968V5.562z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
