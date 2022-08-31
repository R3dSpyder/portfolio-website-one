import { useState, useEffect } from "react";

// stores (and gives access too) a key value pair in local browser storage if passed a key, or else uses the value of the hook initialState.

const useStorageState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};
