import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { PROJECT_OPEN } from './../actions/project';
import projectOpen from './project/open';

export default function* emailingSaga()
{
  yield fork(takeLatest, PROJECT_OPEN, projectOpen);
}
