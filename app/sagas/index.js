import projectSaga from './project';

export default function* ()
{
  yield [
    projectSaga()
  ];
}
