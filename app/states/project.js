// @flor
import Immutable, { Record as record } from 'immutable';

const ProjectRecord = record({ id: null, type: null, children: {} });
const SolutionRecord = record({ id: null, type: null, children: {} });
const ProblemRecord = record({ id: null, type: null, children: {} });

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
