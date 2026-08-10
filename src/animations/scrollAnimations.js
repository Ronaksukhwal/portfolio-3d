import gsap from "gsap";

export const initScrollAnimations = () => {
  // Keep sections fully visible and animate only movement to avoid opacity getting stuck in dev strict mode.
  gsap.set(".section", { opacity: 1 });
  gsap.from(".section", {
    y: 70,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.2,
    clearProps: "transform",
    overwrite: "auto",
  });
};