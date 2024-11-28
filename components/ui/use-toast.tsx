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

// Exporting toast for import
export const toast = {
  success: (message) => addToast({ type: 'success', message }),
  error: (message) => addToast({ type: 'error', message }),
  info: (message) => addToast({ type: 'info', message }),
};
