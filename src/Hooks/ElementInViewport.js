import { useState, useEffect, useRef } from "react";

const useIsElementInViewport = () => {
  const elementRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root element
      rootMargin: "0px",
      threshold: 0.2, // 0.5 means 50% of the element is visible to trigger the callback
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsInViewport(entry.isIntersecting);

      if (entry.isIntersecting) {
        console.log("Element is in the viewport");
      } else {
        console.log("Element is not in the viewport");
      }
    }, observerOptions);

    if (elementRef.current) {
      intersectionObserver.observe(elementRef.current);
    }

    return () => {
      // Clean up the observer when the component is unmounted or the element changes
      if (elementRef.current) {
        intersectionObserver.unobserve(elementRef.current);
      }
    };
  }, [elementRef]);

  return [elementRef, isInViewport];
};

export default useIsElementInViewport;
