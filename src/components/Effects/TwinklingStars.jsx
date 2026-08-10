import { useEffect, useState } from "react";
import "./TwinklingStars.css";

const TwinklingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate a fixed set of random stars
    const starCount = 120;
    const generatedStars = Array.from({ length: starCount }).map((_, i) => {
      const size = Math.random() * 2.2 + 0.8; // 0.8px to 3px
      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size,
        delay: `${Math.random() * 6}s`,
        duration: `${Math.random() * 4 + 2}s`, // 2s to 6s twinkle cycles
      };
    });
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-50] bg-[#030014]">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full star-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: star.size > 2.0 ? "0 0 6px rgba(255, 255, 255, 0.7)" : "none",
          }}
        />
      ))}
    </div>
  );
};

export default TwinklingStars;
