import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring lag
  const springConfig = { damping: 40, stiffness: 350, mass: 0.5 };
  const outerX = useSpring(mouseX, springConfig);
  const outerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };
    checkTouch();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Hover triggers for interactive elements
    const addHoverListeners = () => {
      const elements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .interactive, .nav-link'
      );
      elements.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    // Re-bind listeners on DOM changes (important for React routing)
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, [mouseX, mouseY, hidden]);

  if (isTouchDevice || hidden) return null;

  return (
    <>
      {/* 1. Fast Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[99999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: clicked
            ? "var(--color-brand-secondary)"
            : hovered
            ? "#fff"
            : "var(--color-brand-primary)",
          boxShadow: clicked
            ? "0 0 12px var(--color-brand-secondary)"
            : hovered
            ? "0 0 12px #fff"
            : "0 0 8px var(--color-brand-primary)",
        }}
      />

      {/* 2. Lagging Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99998]"
        animate={{
          width: hovered ? 46 : 28,
          height: hovered ? 46 : 28,
          borderWidth: hovered ? "1px" : "1.5px",
          borderColor: clicked
            ? "var(--color-brand-primary)"
            : hovered
            ? "rgba(6, 182, 212, 0.9)"
            : "rgba(124, 58, 237, 0.42)",
          backgroundColor: hovered
            ? "rgba(6, 182, 212, 0.08)"
            : "rgba(124, 58, 237, 0.02)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 30 }}
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: hovered ? "0 0 15px rgba(6, 182, 212, 0.25)" : "none",
        }}
      />
    </>
  );
};

export default CustomCursor;

