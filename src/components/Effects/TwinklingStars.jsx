import { useEffect, useState } from "react";
import "./TwinklingStars.css";

const generateStars = () => {
  const starCount = 85;
  return Array.from({ length: starCount }).map((_, i) => {
    const size = ((i * 7) % 20) / 10 + 0.8; // 0.8px to 2.8px
    return {
      id: i,
      top: `${(i * 17.3) % 100}%`,
      left: `${(i * 29.7) % 100}%`,
      size,
      delay: `${(i * 0.25) % 5}s`,
      duration: `${((i * 0.4) % 3) + 2}s`,
    };
  });
};

const TwinklingStars = () => {
  const [stars] = useState(generateStars);

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
