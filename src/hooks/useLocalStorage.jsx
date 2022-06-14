import { useEffect } from "react";
import { useState } from "react";

const PREFIX = "stock_ticker-";

const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const json_value = localStorage.getItem(prefixedKey);
    if (json_value != null) return JSON.parse(json_value);

    if (typeof initialValue === "function") return initialValue();
    else return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;