import { expect } from 'chai';
import sinon from 'sinon';
import { call, put, select } from 'redux-saga/effects';
import Project, { fetchService, projectData } from './../../services/project';
import { fetchSuccess, fetchFailed } from './../../actions/project';
import fetchProject, { getProject } from './fetch';

describe('saga', () =>
{
  const sandbox = sinon.sandbox.create();
  const name = 'ProjectName';
  const path = '/project/path';
  const project = new Project(name, path);
  const data = projectData(project);

  afterEach(() =>
  {
    sandbox.restore();
  });

  describe('project', () =>
  {
    describe('fetch', () =>
    {
      it('success', () =>
      {
        const saga = fetchProject();
        expect(saga.next().value).to.deep.equal(select(getProject));
        expect(saga.next(project).value)
          .to.deep.equal(call(fetchService, project));
        expect(saga.next({ data }).value)
          .to.be.eql(put(fetchSuccess(data)));
        expect(saga.next().done).to.be.eql(true);
      });

      it('failed', () =>
      {
        const error = { message: 'error' };
        const saga = fetchProject();
        expect(saga.next().value).to.deep.equal(select(getProject));
        expect(saga.next(project).value)
          .to.deep.equal(call(fetchService, project));
        expect(saga.next({ error }).value)
          .to.be.eql(put(fetchFailed(error)));
        expect(saga.next().done).to.be.eql(true);
      });
    });
  });
});
