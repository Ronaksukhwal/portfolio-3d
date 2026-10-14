import gsap from "gsap";

export const initScrollAnimations = () => {
  // Ensure sections render immediately on page open without sluggish layout shifting
  gsap.set(".section", { opacity: 1, clearProps: "transform" });
};