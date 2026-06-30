import { useContext } from "react";
import { LenisContext } from "../components/layout/lenisContext";

export default function useLenisScroll() {
  const lenisRef = useContext(LenisContext);

  function scrollTo(target) {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(target, { duration: 1.4 });
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return scrollTo;
}
