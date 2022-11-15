import { createContext } from "react";

export const viewportContext = createContext({ width: window.innerWidth, height: window.innerHeight });
