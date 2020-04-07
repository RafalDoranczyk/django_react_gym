import { useEffect } from "react";

const UseDetectOutsideClick = (ref, setCollapsed) => {
  useEffect(() => {
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  });

  const listener = e => {
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }

    setCollapsed(true);
  };
};

export default UseDetectOutsideClick;
