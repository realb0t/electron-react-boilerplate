import { expect } from 'chai';
import sinon from 'sinon';
import { call, put } from 'redux-saga/effects';
import Project, { openService } from './../../services/project';
import { openSuccess, fetchFailed } from './../../actions/project';
import openProject from './open';

describe('fetchEmailDrafts saga', () =>
{
  const sandbox = sinon.sandbox.create();

  afterEach(() =>
  {
    sandbox.restore();
  });

  it('Success fetch email drafts', () =>
  {
    const project = new Project('name', 'path');
    const saga = openProject();
    expect(saga.next().value).to.deep.equal(call(openService));
    expect(saga.next({ project }).value).to.be.eql(put(openSuccess(project)));
    expect(saga.next().done).to.be.eql(true);
  });

  it('Fail fetch email drafts', () =>
  {
    const error = { message: 'error' };
    const saga = openProject();
    expect(saga.next().value).to.deep.equal(call(openService));
    expect(saga.next({ error }).value).to.be.eql(put(fetchFailed(error)));
    expect(saga.next().done).to.be.eql(true);
  });
});
