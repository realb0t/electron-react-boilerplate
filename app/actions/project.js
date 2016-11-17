// @flow
export const PROJECT_OPEN = 'PROJECT_OPEN';
export const PROJECT_OPEN_SUCCESS = 'PROJECT_OPEN_SUCCESS';
export const PROJECT_OPEN_FAILED = 'PROJECT_OPEN_FAILED';
export const PROJECT_FETCH = 'PROJECT_FETCH';
export const PROJECT_FETCH_SUCCESS = 'PROJECT_FETCH_SUCCESS';
export const PROJECT_FETCH_FAILED = 'PROJECT_FETCH_FAILED';

export function open()
{
  return { type: PROJECT_OPEN };
}

export function openSuccess()
{
  return { type: PROJECT_OPEN_SUCCESS };
}

export function openFailed()
{
  return { type: PROJECT_OPEN_FAILED };
}

export function fetch()
{
  return { type: PROJECT_FETCH };
}

export function fetchSuccess()
{
  return { type: PROJECT_FETCH_SUCCESS };
}

export function fetchFailed()
{
  return { type: PROJECT_FETCH_FAILED };
}
