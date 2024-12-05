import { useEffect, useRef, useState } from 'react';

const attachMediaListener = (query: any, callback: any) => {
  try {
    query.addEventListener('change', callback);
    return () => query.removeEventListener('change', callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
};

const getInitialValueMedia = (query: any, initialValue: any) => {
  if (typeof initialValue === 'boolean') {
    return initialValue;
  }

  if (typeof window !== 'undefined' && 'matchMedia' in window) {
    return window.matchMedia(query).matches;
  }

  return false;
};

export const useMediaQuery = (query: any, initialValue = true, getInitialValueInEffect = false) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [matches, setMatches] = useState<any>(
    getInitialValueInEffect ? initialValue : getInitialValueMedia(query, initialValue)
  );
  const queryRef = useRef<any>();

  useEffect(() => {
    if ('matchMedia' in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef?.current?.matches);
      setIsLoading(false);
      return attachMediaListener(queryRef.current, (event: any) => setMatches(event.matches));
    }

    return undefined;
  }, [query]);

  return { isMatch: matches, isLoading };
};
