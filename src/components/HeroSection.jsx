import { ArrowDown, Linkedin, Mail, Phone } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiTiktok } from "react-icons/si";
import myPhoto from "../assets/2.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      dir="rtl"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 xl:px-20 font-hebrew">
      {/* שמתי max-w-6xl כדי שלא יתפרס על כל המסך לגמרי */}
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-16 z-10 mt-10">
        {/* text block */}
        <div className="space-y-4 text-center md:text-right md:basis-1/2">
          {/* הורדתי מדרגה בכל breakpoint גדול */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in">היי, אני</span>{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">אולגה</span>{" "}
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">מורוזוב</span>
          </h1>

          {/* גם הפסקה ירדה חצי דרגה */}
          <p className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] xl:text-[1.45rem] text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3 leading-relaxed">
            יוצרת תוכן, צלמת וסטודנטית לתקשורת חזותית. אני עוזרת לעסקים ומותגים לבנות נוכחות ויזואלית שמרגישה חיה, אסתטית ומדויקת.
          </p>

          <div className="pt-4 md:pt-5 opacity-0 animate-fade-in-delay-4 flex justify-center md:justify-start">
            <a href="#projects" className="cosmic-button text-base sm:text-lg md:text-lg px-6 sm:px-7 py-3 sm:py-3.5">
              צפו בעבודות
            </a>
          </div>
        </div>

        {/* image block */}
        <div className="md:basis-1/2 flex flex-col items-center gap-6">
          {/* הורדתי מ-30rem ל-26rem בערך */}
          <img src={myPhoto} alt="Olga Morozov" className="w-56 sm:w-64 md:w-72 lg:w-[24rem] xl:w-[26rem] object-cover rounded-lg" />
        </div>
      </div>

      {/* contact icons */}
      <div className="mt-2 space-y-8">
        <div className="flex justify-center gap-6 sm:gap-7 md:gap-8 py-6">
          {[
            { href: "mailto:olga.morozov98@gmail.com", icon: <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" /> },
            { href: "tel:+972522664571", icon: <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" /> },
            {
              href: "https://wa.me/972522664571",
              icon: <SiWhatsapp className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
              target: "_blank",
            },
            {
              href: "https://www.linkedin.com/in/olya-morozov-03b328289/",
              icon: <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
              target: "_blank",
            },
            {
              href: "https://www.instagram.com/olya__mor/",
              icon: <SiInstagram className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
              target: "_blank",
            },
            {
              href: "https://www.tiktok.com/@yourusername",
              icon: <SiTiktok className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
              target: "_blank",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.target}
              rel={item.target ? "noreferrer" : undefined}
              className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition">
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm md:text-base text-muted-foreground mb-2">גללו למטה</span>
        <ArrowDown className="h-5 w-5 md:h-6 md:w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
