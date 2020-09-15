
// Dependencies
import { useRef, useState, useLayoutEffect } from 'react'

// Hook
export default function useRefScrollProgress(inputRef) {
  const ref = inputRef || useRef();
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;
    
    setStart(offsetTop / ref.current.clientHeight);
    setEnd((offsetTop + rect.height) / ref.current.clientHeight);
  });

  return { ref, start, end };
}
