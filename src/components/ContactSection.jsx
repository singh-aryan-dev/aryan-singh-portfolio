import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in my work or have internship or job opportunities? I'd
          love to connect! I'm actively seeking opportunities to grow as a
          developer and contribute to meaningful, impactful projects.
        </p>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Contact Information
          </h3>

          <div className="space-y-6 flex flex-col items-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:aryandineshsingh1@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  aryandineshsingh1@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+91 7506840612"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 7506840612
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Location</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Pune, India
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col items-center">
            <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
            <div className="flex space-x-4">
              <a href="#" target="_blank">
                <Linkedin />
              </a>
              <a href="https://github.com/singh-aryan-dev" target="_blank">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
