// @flow
export const CURSOR_PUSH = 'CURSOR_PUSH';
export const CURSOR_POP = 'CURSOR_POP';
export const CURSOR_RESET = 'CURSOR_RESET';

export function push()
{
  return {
    type: CURSOR_PUSH
  };
}

export function pop()
{
  return {
    type: CURSOR_POP
  };
}

export function reset()
{
  return {
    type: CURSOR_RESET
  };
}
