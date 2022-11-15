import { useContext } from "react";

import { viewportContext } from "../contexts";

export default function useViewport() {
  return useContext(viewportContext);
}
