import { useCallback, useEffect, useState } from "react";

export const useMobile = () => {
  const query = "(max-width: 768px)";

  const getMatches = () => window.matchMedia(query).matches;

  const [isMobile, setMobile] = useState(getMatches());

  const handleChange = useCallback(() => setMobile(getMatches()), []);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => matchMedia.removeEventListener("change", handleChange);
  }, [handleChange, query]);

  return isMobile;
};
