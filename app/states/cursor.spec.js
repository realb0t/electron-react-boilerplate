import { expect } from 'chai';
import Immutable from 'immutable';
import defaultState from './cursor';

describe('states', () =>
{
  describe('project', () =>
  {
    it('default state is list', () =>
    {
      expect(defaultState).to.be.an.instanceof(Immutable.List);
    });
  });
});
