import { useEffect, useState } from "react";

export default function useIsMobile (){
    const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const mediaQueryChange = (event: any) => {
  console.log(isMobile)

      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", mediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", mediaQueryChange);
    };
  }, []);
  return {isMobile}
}