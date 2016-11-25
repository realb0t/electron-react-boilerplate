export const projectContent = {
  problemName: {
    title: 'Problem Name',
    type: 'problem',
    solving: 'solvingName',
    children: {
      solutionName: {
        title: 'Solution Name',
        type: 'solution',
        children: {
          secondProblemName: {
            title: 'Second Problem Name',
            type: 'problem',
            solving: 'solvingName',
            children: []
          }
        }
      }
    }
  }
};

export function projectData(p)
{
  return {
    title: p.name,
    type: 'project',
    children: projectContent
  };
}

class Project
{
  constructor(projectName, projectPath)
  {
    this.name = projectName;
    this.path = projectPath;
  }

  fetch()
  {
    return Promise.resolve(projectData(this));
  }
}

Project.open = (projectName, projectPath) =>
{
  const newProject = new Project(projectName, projectPath);
  return Promise.resolve(newProject);
};

export function openService(projectName, projectPath)
{
  Project.open(projectName, projectPath)
    .then(project => ({ project }))
    .catch(error => ({ error }));
}

export function fetchService(project)
{
  project.fetch()
    .then(data => ({ data }))
    .catch(error => ({ error }));
}

export default Project;
