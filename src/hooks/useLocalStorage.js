import React, { useState, useEffect } from "react";

const perfix = "codepen-clone-";

function useLocalStorage(key, initialValue) {
  const prefixKey = perfix + key;

  const [value, setvalue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixKey);

    if (jsonValue !== null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [prefixKey, value]);
  return [value, setvalue];
}

export default useLocalStorage;
