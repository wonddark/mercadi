import { useState } from "react";

function useToggleOpen(init = false) {
  const [isOpen, setIsOpen] = useState(init);
  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  return { isOpen, toggleIsOpen };
}

export default useToggleOpen;
