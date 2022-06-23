import React, { Dispatch, SetStateAction } from 'react';
import { useState, useCallback } from 'react';

type ReturnTypes<T = any> = [T, (e: any) => void, Dispatch<SetStateAction<T>>]

const useInput = <T = any>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, [])
  return [value, handler, setValue];
};

export default useInput;