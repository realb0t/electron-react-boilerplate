import { expect } from 'chai';
import { importData, ProjectItem, ProblemItem, SolutionItem } from './project';
import { projectData as exampleProjectData } from '../services/project';

describe('states', () =>
{
  describe('project', () =>
  {
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
  });
});
