import { expect } from 'chai';
import rootSaga from './index';
import projectSaga from './project';

describe('saga', () =>
{
  it('Return sagas', () =>
  {
    const sagas = rootSaga().next().value;
    const sagaTypes = [projectSaga];
    sagas.forEach((saga, i) =>
    {
      expect(saga).to.be.an.instanceof(sagaTypes[i]);
    });
  });
});
