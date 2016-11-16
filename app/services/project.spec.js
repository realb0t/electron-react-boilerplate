import { expect } from 'chai';
import Project from './project';

describe('services', () =>
{
  describe('project', () =>
  {
    it('fetch project', () =>
    {
      const project = new Project('Name', '/Project/Path');
      expect(project.fetch()).to.be.an.instanceof(Promise);
    });
  });
});
