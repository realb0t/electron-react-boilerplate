import { expect } from 'chai';
import {
  CURSOR_PUSH,
  CURSOR_POP,
  CURSOR_RESET,
  push,
  pop,
  reset
} from './cursor';

describe('actions', () =>
{
  describe('cursor', () =>
  {
    it('push', () =>
    {
      expect(push()).to.be.eql({ type: CURSOR_PUSH });
    });

    it('pop', () =>
    {
      expect(pop()).to.be.eql({ type: CURSOR_POP });
    });

    it('reset', () =>
    {
      expect(reset()).to.be.eql({ type: CURSOR_RESET });
    });
  });
});
