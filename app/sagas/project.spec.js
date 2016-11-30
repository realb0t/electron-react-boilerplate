import { expect } from 'chai';
import { fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { PROJECT_OPEN, PROJECT_FETCH } from './../actions/project';
import projectOpen from './project/open';
import projectFetch from './project/fetch';
import projectSaga from './project';

describe('saga', () =>
{
  describe('project', () =>
  {
    it('have fork needed sagas', () =>
    {
      const saga = projectSaga();
      expect(saga.next().value).to.deep.equal(
        fork(takeLatest, PROJECT_OPEN, projectOpen));
      expect(saga.next().value).to.deep.equal(
        fork(takeLatest, PROJECT_FETCH, projectFetch));
      expect(saga.next().done).to.be.eql(true);
    });
  });
});
