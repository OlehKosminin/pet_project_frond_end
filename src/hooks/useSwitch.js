import { useState } from "react";

export const useSwitch = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  // const toggle = () => setIsOpen((isOpen) => !isOpen);

  return { isOpen, open, close };
};
