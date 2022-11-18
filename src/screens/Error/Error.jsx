import { useSearchParams } from "react-router-dom";

import "./Error.scss";

/**
 * The error page.
 * @type {React.FC}
 * @return {React.ReactElement}
 */
function Error() {
  const [searchParams] = useSearchParams();
  const msg = searchParams.get("msg");

  return (
    <main id="errorMain">
      <h1>{msg ? `${msg}.` : "Something went wrong !"}</h1>
    </main>
  );
}

export default Error;
