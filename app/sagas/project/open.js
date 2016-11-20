import { call, put } from 'redux-saga/effects';
import { openSuccess, openFailed } from './../../actions/project';
import { openService } from './../../services/project';

export default function* projectOpen(payload)
{
  const { name, path } = payload.data;
  const { project, error } = yield call(openService, name, path);
  if (project)
  {
    yield put(openSuccess(project));
  }
  else
  {
    yield put(openFailed(error));
  }
}
