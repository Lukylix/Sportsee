import { useContext } from "react";

import { viewportContext } from "../contexts";

/**
 * Hooks to get the width and height of the viewport
 * @returns {{height:number, width:number}}
 */
export default function useViewport() {
  return useContext(viewportContext);
}
