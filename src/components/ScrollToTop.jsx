import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // pathname maari change aagum pothu top ku scroll aagum

  return null;
};

export default ScrollToTop;
