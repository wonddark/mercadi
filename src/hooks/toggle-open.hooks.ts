import { useState } from "react";

function useToggleOpen() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  return { isOpen, toggleIsOpen };
}

export default useToggleOpen;
