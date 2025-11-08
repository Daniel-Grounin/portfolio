import { Send, Instagram, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      toast({
        title: "ההודעה נשלחה ✔",
        description: "תודה שפניתם! אחזור אליכם בהקדם.",
      });
      setIsSubmitting(false);
      form.reset();
    } else {
      toast({
        title: "משהו השתבש...",
        description: "נסו שוב או צרו קשר באינסטגרם.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" dir="rtl" className="relative bg-secondary/30 min-h-screen flex items-center font-hebrew">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          בואו <span className="text-primary">נדבר</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          עובדים על מיתוג? צריך צילום? רוצים תוכן לאינסטגרם?
          <br />
          מוזמנים להשאיר פרטים ואני אחזור אליכם.
        </p>

        <div className="grid grid-cols gap-10 text-center">
          <div
            className="bg-card p-8 rounded-lg shadow-xs
               w-full lg:max-w-md lg:mx-auto">
            <h3 className="text-2xl font-semibold mb-6">שליחת הודעה</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  שם מלא
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  הודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="היי אולגה, אני צריך צילום/תוכן עבור..."
                  rows={4}
                />
              </div>

              <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                {isSubmitting ? "שולחת..." : "שליחה"}
                <Send size={16} />
              </button>
            </form>

            {/* אייקונים חברתיים */}
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
                aria-label="Instagram">
                <Instagram size={28} />
              </a>

              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
                aria-label="WhatsApp">
                <MessageCircle size={28} />
              </a>

              <a href="mailto:youremail@example.com" className="text-muted-foreground hover:text-primary transition" aria-label="Email">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
