import { expect } from 'chai';
import {
  PROJECT_FETCH,
  PROJECT_FETCH_SUCCESS,
  PROJECT_FETCH_FAILED,
  fetch,
  fetchSuccess,
  fetchFailed,
  PROJECT_OPEN,
  PROJECT_OPEN_SUCCESS,
  PROJECT_OPEN_FAILED,
  open,
  openSuccess,
  openFailed
} from './project';

describe('actions', () =>
{
  describe('project', () =>
  {
    it('open', () =>
    {
      expect(open()).to.be.eql({ type: PROJECT_OPEN });
    });

    it('openSuccess', () =>
    {
      expect(openSuccess()).to.be.eql({ type: PROJECT_OPEN_SUCCESS });
    });

    it('openFailed', () =>
    {
      expect(openFailed()).to.be.eql({ type: PROJECT_OPEN_FAILED });
    });

    it('fetch', () =>
    {
      expect(fetch()).to.be.eql({ type: PROJECT_FETCH });
    });

    it('fetchSuccess', () =>
    {
      expect(fetchSuccess()).to.be.eql({ type: PROJECT_FETCH_SUCCESS });
    });

    it('fetchFailed', () =>
    {
      expect(fetchFailed()).to.be.eql({ type: PROJECT_FETCH_FAILED });
    });
  });
});
