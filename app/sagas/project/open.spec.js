import { expect } from 'chai';
import sinon from 'sinon';
import { call, put } from 'redux-saga/effects';
import Project, { openService } from './../../services/project';
import { openSuccess, openFailed } from './../../actions/project';
import openProject from './open';

describe('saga', () =>
{
  const sandbox = sinon.sandbox.create();
  const name = 'Project name';
  const path = '/project/path';
  const action = { data: { name, path } };

  afterEach(() =>
  {
    sandbox.restore();
  });

  describe('project', () =>
  {
    describe('open', () =>
    {
      it('success', () =>
      {
        const project = new Project('name', 'path');
        const saga = openProject(action);
        expect(saga.next().value).to.deep.equal(call(openService, name, path));
        expect(saga.next({ project }).value)
          .to.be.eql(put(openSuccess(project)));
        expect(saga.next().done).to.be.eql(true);
      });

      it('failed', () =>
      {
        const error = { message: 'error' };
        const saga = openProject(action);
        expect(saga.next().value).to.deep.equal(call(openService, name, path));
        expect(saga.next({ error }).value)
          .to.be.eql(put(openFailed(error)));
        expect(saga.next().done).to.be.eql(true);
      });
    });
  });
});
