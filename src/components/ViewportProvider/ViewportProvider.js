import { useState, useEffect } from "react";

import { viewportContext } from "../../contexts";

// Work in conjuction with the useViewport hook
export default function ViewportProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return <viewportContext.Provider value={{ width, height }}>{children}</viewportContext.Provider>;
}
