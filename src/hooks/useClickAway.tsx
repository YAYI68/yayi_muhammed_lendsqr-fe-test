import { useEffect } from "react";

import React from "react";

type Ref = React.RefObject<HTMLDivElement>;
type Callback = () => void;

function useClickAway(ref: Ref, callback: Callback) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useClickAway;
