import { useEffect } from 'react';

export default function useListener(node: any, eventName: string, callback: Function, condition: boolean) {
  useEffect(() => {
    if (condition) {
      node.addEventListener(eventName, callback, false);
      return () => {
        node.removeEventListener(eventName, callback, false);
      }
    }
  }, [condition]);
}