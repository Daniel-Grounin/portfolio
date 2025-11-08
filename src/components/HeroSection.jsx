import { ArrowDown } from "lucide-react";
import { Linkedin, Mail, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import myPhoto from "../assets/me.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 mb-5"
    >
      {/* -------- hero content -------- */}
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center md:justify-between gap-10 z-10">
        {/* text block */}
        <div className="space-y-6 text-center md:text-left md:basis-1/2 ">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className=" opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" Daniel"}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {"Grounin "}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            Software engineer turning ideas into scalable, real-world solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* image block */}
        <div className="md:basis-1/2 flex flex-col items-center gap-6">
          <img
            src={myPhoto}
            alt="Daniel Grounin"
            className="w-64 md:w-80 lg:w-96 object-cover rounded-lg insta-purple"
          />
        </div>
      </div>

      {/* Contact Row */}
      <div className="space-y-8">
        {/* Contact row */}
        <div className="flex justify-center gap-8 py-6">
          {/* Email */}
          <a
            href="mailto:dani.grunin@gmail.com"
            aria-label="Email"
            className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition"
          >
            <Mail className="h-6 w-6 text-primary" />
          </a>

          {/* Phone */}
          <a
            href="tel:+972546898958"
            aria-label="Phone"
            className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition"
          >
            <Phone className="h-6 w-6 text-primary" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/972546898958"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition"
          >
            <SiWhatsapp className="h-6 w-6 text-primary" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/danielgru/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition"
          >
            <Linkedin className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>

      {/* -------- scroll indicator -------- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
