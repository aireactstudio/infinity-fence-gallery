import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { NavMenu } from "@/components/ui/nav-menu";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
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
        address: "",
        projectType: "",
        message: "",
        loading: false
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone",
      content: "(360) 200-1005",
      link: "tel:3602001005"
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      content: "build@infinityfencingnw.com",
      link: "mailto:build@infinityfencingnw.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Service Area",
      content: "Greater North West Washington Area"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Hours",
      content: "Daily: 8:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-white mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Let's Build Something Great Together
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're here to help bring your fencing project to life
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gray-50 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-24">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-white shadow-lg">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-blue-600 hover:underline">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Social Media Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label htmlFor="project-type" className="block text-sm font-medium mb-1">
                      Project Type
                    </label>
                    <Input 
                      id="project-type"
                      value={formState.projectType}
                      onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                      placeholder="e.g., Wood Privacy Fence"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-1">
                    Project Address
                  </label>
                  <Input 
                    id="address"
                    value={formState.address}
                    onChange={(e) => setFormState({...formState, address: e.target.value})}
                    placeholder="Your project location"
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
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Follow Our Projects</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/infinityfencingnw/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://www.youtube.com/@InfinityFencingNW" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                      <Youtube className="w-6 h-6" />
                    </a>
                    <a href="https://www.tiktok.com/@infinityfencingnw" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 015.4 5.82C4.1 4.5 3.5 2.8 3.5 1h3.4c-.2 2.2.4 3.4 2 4.8-4.7 0-8 2.7-8 8.8 0 3.2 1.2 5.5 3.3 6.8 2.1 1.3 4.6 1.3 6.7 0 2.1-1.3 3.3-3.6 3.3-6.8v-6c1.4 1 3 1.7 4.8 1.7v-3.4c-1.4 0-2.6-.3-3.7-.9z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Service Areas</h3>
                  <p className="text-gray-600 mb-4">
                    We proudly serve the greater North West Washington area including:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <li>• Vancouver</li>
                    <li>• Battle Ground</li>
                    <li>• Camas</li>
                    <li>• Washougal</li>
                    <li>• Ridgefield</li>
                    <li>• La Center</li>
                    <li>• Portland</li>
                    <li>• Surrounding Areas</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-600">Licensed & Insured in Washington State</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-600">Free Detailed Estimates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-600">Premium Materials & Craftsmanship</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-600">Excellent Customer Service</span>
                    </li>
                  </ul>
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
