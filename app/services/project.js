const projectContent = [
  {
    id: 'problemName',
    type: 'problem',
    solving: 'solvingName',
    children: [
      {
        id: 'SolutionName',
        type: 'solution',
        problems: [
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

class Project
{
  constructor(projectName, projectPath)
  {
    this.name = projectName;
    this.path = projectPath;
  }

  fetch()
  {
    const projectData = {
      id: this.name,
      children: projectContent
    };
    return Promise.resolve(projectData);
  }
}

export default Project;
