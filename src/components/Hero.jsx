import profile from '../assets/profile.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={profile} alt="Profile" />
        <h1>Saif Ur Rehman</h1>
        <p>
          Cloud & DevOps Engineer with hands-on experience in AWS and cloud-native
          technologies, specializing in CI/CD automation, container orchestration,
          and bridging development with production-ready infrastructure.
        </p>
      </div>
    </section>
  );
};

export default Hero;
