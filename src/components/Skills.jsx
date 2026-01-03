const skills = [
  { name: 'AWS', icon: 'amazonaws' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Kubernetes', icon: 'kubernetes' },
  { name: 'Helm', icon: 'helm' },
  { name: 'Argo CD', icon: 'argo' },
  { name: 'Jenkins', icon: 'jenkins' },
  { name: 'GitHub', icon: 'github' },
  { name: 'GitHub Actions', icon: 'githubactions' },
  { name: 'Terraform', icon: 'terraform' },
  { name: 'Ansible', icon: 'ansible' },
  { name: 'Linux', icon: 'linux' },
  { name: 'Prometheus', icon: 'prometheus' },
  { name: 'Grafana', icon: 'grafana' },
  { name: 'Python', icon: 'python' },
  { name: 'Bash', icon: 'gnubash' },
  { name: 'YAML', icon: 'yaml'}
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="container grid">
        {skills.map(skill => (
          <div className="card skill-card" key={skill.name}>
            <img
              src={`https://cdn.simpleicons.org/${skill.icon}`}
              alt={skill.name}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
