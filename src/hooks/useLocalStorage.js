import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const savedData = localStorage.getItem(key);

      return savedData !== null ? JSON.parse(savedData) : initialValue;
    } catch (error) {
      console.error("Lỗi đọc dữ liệu:", error);
      return initialValue;
    }
  });

  const saveValue = (newValue) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));

      setValue(newValue);

      return true;
    } catch (error) {
      console.error("Lỗi lưu dữ liệu:", error);
      return false;
    }
  };

  return [value, saveValue];
}

export default useLocalStorage;
