import { useState, useEffect } from "react";

export const useHover = (ref) => {
  const [hovered, setHovered] = useState(false);

  let current = ref.current;

  const enter = () => {
    setHovered(true);
  };

  const leave = () => {
    setHovered(false);
  };

  useEffect(() => {
    console.log(hovered);
  }, [hovered]);

  useEffect(() => {
    if (current) {
      current.addEventListener("mouseenter", enter);
      current.addEventListener("mouseleave", leave);

      return () => {
        current.removeEventListener("mouseenter", enter);
        current.removeEventListener("mouseleave", leave);
      };
    }
  }, [current]);
  return hovered;
};
