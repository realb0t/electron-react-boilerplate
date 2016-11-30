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

    it('open project factory', (done) =>
    {
      Project.open('Name', '/Project/Path').then((project) =>
      {
        expect(project).to.be.an.instanceof(Project);
        return done();
      }).catch(() => {});
    });
  });
});
