import { useEffect, useState } from "react";

const SparkleBackground = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    generateSparkles();

    const handleResize = () => {
      generateSparkles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateSparkles = () => {
    // פחות אלמנטים, אבל יותר עדינים
    const count = Math.floor((window.innerWidth * window.innerHeight) / 15000);
    const newSparkles = [];

    for (let i = 0; i < count; i++) {
      newSparkles.push({
        id: i,
        size: Math.random() * 6 + 3, // 3–9px
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 1.5,
        opacity: Math.random() * 0.4 + 0.4,
      });
    }

    setSparkles(newSparkles);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {sparkles.map((sp) => (
        <span
          key={sp.id}
          className="sparkle"
          style={{
            width: sp.size + "px",
            height: sp.size + "px",
            left: sp.x + "%",
            top: sp.y + "%",
            opacity: sp.opacity,
            animationDelay: `${sp.delay}s`,
            animationDuration: `${sp.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SparkleBackground;
