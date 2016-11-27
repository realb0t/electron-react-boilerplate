// @flor
import Immutable, { Record as record } from 'immutable';
import { projectData as exampleProjectData } from './../services/project';

const ProjectRecord = record({ id: null,
  title: null,
  type: 'project',
  children: {} });
const SolutionRecord = record({ id: null,
  title: null,
  type: 'solution',
  children: {} });
const ProblemRecord = record({ id: null,
  title: null,
  type: 'problem',
  children: {} });

export class ProjectItem extends ProjectRecord
{
}

export class ProblemItem extends ProblemRecord
{
}

export class SolutionItem extends SolutionRecord
{
}

export const buildItem = (mapItem: Immutable.Map) =>
{
  const obj = mapItem.toJS();
  const { type } = obj;
  switch (type)
  {
    case 'solution':
      return new SolutionItem();
    case 'project':
      return new ProjectItem();
    case 'problem':
      return new ProblemItem();
    default:
      throw new Error(`Not defined type ${type}`);
  }
};

export const importData = projectData => Immutable.fromJS(projectData);
const defaltState = importData(exampleProjectData({ name: 'Example project' }));

export default defaltState;
