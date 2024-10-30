import { useState, useEffect } from "react";

export function useLocalStorageState(initalState, key) {
  // Lazy inital state
  const [value, setValue] = useState(function (params) {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initalState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
