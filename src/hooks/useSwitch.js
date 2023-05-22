import { useState } from "react";

export const useSwitch = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [ElName, setElName] = useState("");

  const open = (name) => {
    setElName(`{${name}}`);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  // const toggle = () => setIsOpen((isOpen) => !isOpen);

  return { isOpen, ElName, open, close };
};
