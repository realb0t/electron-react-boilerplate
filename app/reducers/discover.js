import { List as listBuilder } from 'immutable';

const initialState = listBuilder();

// Discover is current cursor
export default function counter(state = initialState, action)
{
  switch (action.type)
  {
    default:
      return state;
  }
}
