import { Briefcase, Camera, User } from "lucide-react";
import heroArt from "../assets/4.png";

const AboutSection = () => {
  return (
    <section id="about" dir="rtl" className="py-24 px-4 font-hebrew">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* צד תמונה / ארט */}
        <div className="relative flex justify-center lg:justify-start">
          {/* רקע עגול */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-primary/20 via-white to-transparent rounded-[36%] rotate-6 absolute top-6 right-6 blur-[1px]" />
          {/* התמונה עצמה */}
          <img src={heroArt} alt="art bust" className="relative w-66 md:w-152 drop-shadow-xl" />
        </div>

        {/* צד טקסט */}
        <div className="space-y-6">
          <p className="text-2xl tracking-[0.2em] uppercase text-primary">קצת עליי</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            יוצרת תוכן ויזואלי, צלמת
            <br />
            ומעצבת תקשורת חזותית
          </h2>

          <p className="text-muted-foreground">
            אני אולגה, סטודנטית בשנה האחרונה לתקשורת חזותית ומנהלת את העסק של "לק גל" כבר 6 שנים. אני מלווה עסקים קטנים וביוטי ביצירת נראות
            דיגיטלית שמרגישה מעוצבת, אישית ומדויקת לפלטפורמה.
          </p>

          <p className="text-muted-foreground">
            אני יודעת לחבר בין צילום, עיצוב וסושיאל – כדי שהפיד, הסטוריז והקמפיין יראו אותו מותג בכל מקום.
          </p>

          {/* כפתורים ממורכזים */}
          <div className="flex flex-wrap gap-4 pt-2 justify-center">
            <a href="#contact" className="cosmic-button">
              דברו איתי
            </a>
            <a href="#projects" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors">
              לצפייה בעבודות
            </a>
          </div>

          {/* 3 כרטיסוני יכולות */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            <div className="rounded-lg bg-card/80 border p-4 flex gap-3 items-start">
              <div className="p-2 rounded-full bg-primary/10">
                <Camera className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">צילום & תוכן</h4>
                <p className="text-xs text-muted-foreground">רילז, סטוריז, צילומי מוצר.</p>
              </div>
            </div>
            <div className="rounded-lg bg-card/80 border p-4 flex gap-3 items-start">
              <div className="p-2 rounded-full bg-primary/10">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">מיתוג ונראות</h4>
                <p className="text-xs text-muted-foreground">שפה ויזואלית אחידה.</p>
              </div>
            </div>
            <div className="rounded-lg bg-card/80 border p-4 flex gap-3 items-start">
              <div className="p-2 rounded-full bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">ניסיון עסקי</h4>
                <p className="text-xs text-muted-foreground">6 שנים ניהול "לק גל".</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
