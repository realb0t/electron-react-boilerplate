import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { PROJECT_OPEN, PROJECT_FETCH } from './../actions/project';
import projectOpen from './project/open';
import projectFetch from './project/fetch';

export default function* emailingSaga()
{
  yield fork(takeLatest, PROJECT_OPEN, projectOpen);
  yield fork(takeLatest, PROJECT_FETCH, projectFetch);
}
