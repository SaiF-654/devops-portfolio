const projects = [
  {
    name: 'CI/CD Pipeline with Jenkins',
    tools: 'Jenkins, Docker, AWS, Ansible, Vault',
    desc: 'Automated build and deployment pipeline.',
    link: 'https://github.com/SaiF-654/ansible-with-jenkins.git'
  },
  {
    name: 'Kubernetes HPA Deployment',
    tools: 'Kubernetes, Helm, HPA, VPA and EC2',
    desc: 'Auto-scaling based on CPU usage.',
    link: 'https://github.com/SaiF-654/k8s-with-HPA_VPA.git'
  },
  {
    name: 'Ansible Nginx & MySQL Setup',
    tools: 'Ansible, Vault, Playbook and Roles',
    desc: 'Automated multiple servers provisioning.',
    link: 'https://github.com/SaiF-654/ansible-collections-and-prebuilt-roles.git'
  },
  {
    name: 'CI/CD + ArgoCD Image Updater',
    tools: 'ArgoCD, GitOps, K8s, Helm',
    desc: 'Automatic container image updates.',
    link: 'https://github.com/SaiF-654/EKS-helm-argocd-imageupdater.git'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="container grid">
        {projects.map(p => (
          <div className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p><strong>Tools:</strong> {p.tools}</p>
            <p>{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              style={{ color: '#38bdf8', marginTop: '10px', display: 'inline-block' }}
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
