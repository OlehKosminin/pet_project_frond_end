import { useState } from "react";

export const useSwitch = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [itemInfo, setItemInfo] = useState({});
  const open = (itemInfo) => {
    setItemInfo(itemInfo);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  return { isOpen, itemInfo, open, close };
};
