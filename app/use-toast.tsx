import { useState } from 'react';

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    setToasts([...toasts, message]);
    setTimeout(() => {
      setToasts(toasts.slice(1));
    }, 3000);
  };

  return { toasts, addToast };
};
