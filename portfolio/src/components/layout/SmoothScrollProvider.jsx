import useLenis from "../../hooks/useLenis";
import { LenisContext } from "./lenisContext";

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useLenis();
  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}
