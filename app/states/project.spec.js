import { expect } from 'chai';
import Immutable from 'immutable';
import defaultState, { buildItem, importData, ProjectItem,
  ProblemItem, SolutionItem } from './project';
import { projectData as exampleProjectData } from '../services/project';

describe('states', () =>
{
  describe('project', () =>
  {
    it('default state is map', () =>
    {
      expect(defaultState).to.be.an.instanceof(Immutable.Map);
    });

    it('#importData should be import projectData as Immutable', () =>
    {
      const projectData = exampleProjectData({ name: 'Project' });
      const project = importData(projectData);
      expect(project.getIn(['type'])).to.equal('project');
      expect(project.getIn(['children', 'problemName', 'type']))
        .to.equal('problem');
      expect(project.getIn(['children', 'problemName', 'children',
        'solutionName', 'type'])).to.equal('solution');
      expect(project.getIn(['children', 'problemName', 'children',
        'solutionName', 'children', 'secondProblemName', 'type']))
        .to.equal('problem');
    });

    it('#buildItem for ProjectItem', () =>
    {
      const projectData = exampleProjectData({ name: 'Project' });
      const project = importData(projectData);
      expect(buildItem(project)).to.be.an.instanceof(ProjectItem);
    });

    it('#buildItem for ProblemItem', () =>
    {
      const projectData = exampleProjectData({ name: 'Project' });
      const project = importData(projectData);
      const cursor = ['children', 'problemName'];
      expect(buildItem(project.getIn(cursor)))
        .to.be.an.instanceof(ProblemItem);
    });

    it('#buildItem for ProblemItem', () =>
    {
      const projectData = exampleProjectData({ name: 'Project' });
      const project = importData(projectData);
      const cursor = ['children', 'problemName', 'children', 'solutionName'];
      expect(buildItem(project.getIn(cursor)))
        .to.be.an.instanceof(SolutionItem);
    });
  });
});
