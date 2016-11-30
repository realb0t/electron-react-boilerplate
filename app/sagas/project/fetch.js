import { call, put, select } from 'redux-saga/effects';
import { fetchSuccess, fetchFailed } from './../../actions/project';
import { fetchService } from './../../services/project';

export const getProject = state => state.project;

export default function* projectFetch()
{
  const project = yield select(getProject);
  const { data, error } = yield call(fetchService, project);
  if (data)
  {
    yield put(fetchSuccess(data));
  }
  else
  {
    yield put(fetchFailed(error));
  }
}
