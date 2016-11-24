export const projectContent = [
  {
    id: 'problemName',
    type: 'problem',
    solving: 'solvingName',
    children: [
      {
        id: 'SolutionName',
        type: 'solution',
        children: [
          {
            id: 'problemName',
            type: 'problem',
            solving: 'solvingName',
            children: []
          }
        ]
      }
    ]
  }
];

export function projectData(p)
{
  return {
    id: p.name,
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
