import { useCallback } from 'react';
import useEventListener from '@jdthornton/useeventlistener';

type KeysType = number[] | number | null

function isValidEvent (
  e: KeyboardEvent,
  keys: KeysType
): boolean {
  if(Array.isArray(keys)){
    if(keys.indexOf(e.which) === -1) return false
  } else if (typeof keys === 'number'){
    if(keys !== e.which) return false
  }
  return true
}

export default function useKeyPress(
  handler: ((e: KeyboardEvent) => void) | null,
  keys: KeysType
){

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if(handler && isValidEvent(e,keys)) handler(e)
  },[handler,keys])

  useEventListener(handler ? "keyup" : null, handleKeyUp)
}
