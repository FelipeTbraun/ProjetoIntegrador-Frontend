import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Sobre.css";

function Sobre() {
  const teamMembers = [
    {
      id: 1,
      name: "Felipe Tavares Braun",
      role: "Frontend Developer",
      formation: "React, JavaScript, CSS",
      initials: "AJ",
      avatarClass: "red",
      photo: "https://via.placeholder.com/90?text=AJ", 
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      id: 2,
      name: "Felipe Yanagui Geraldo",
      role: "Backend Developer",
      formation: "Node.js, MongoDB, API REST",
      initials: "BS",
      avatarClass: "dark",
      photo: "https://via.placeholder.com/90?text=BS",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      id: 3,
      name: "Igor Alves Lemes",
      role: "Full Stack",
      formation: "React, Node.js, Design",
      initials: "CP",
      avatarClass: "red",
      photo: "https://via.placeholder.com/90?text=CP", 
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      id: 4,
      name: "Eduardo Yoshida Reis",
      role: "UX/UI Designer",
      formation: "Figma, Design System, Prototipagem",
      initials: "DF",
      avatarClass: "dark",
      photo: "https://via.placeholder.com/90?text=DF", 
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      id: 5,
      name: "Maiara Macedo",
      role: "UX/UI Designer",
      formation: "Figma, Design System, Prototipagem",
      initials: "DF",
      avatarClass: "dark",
      photo: "https://via.placeholder.com/90?text=DF",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    }
  ];
  return (
    <>
      <Navbar />
      <div>
      {/* Hero */}
      <section className="sobre-hero">
        <div className="container">
          <span className="sobre-badge">Nossa Equipe</span>
          <h1>
            As pessoas por trás do <span>SOSI</span>
          </h1>
          <p>
            Um grupo de estudantes comprometidos em usar a tecnologia para
            aproximar cidadãos e prefeitura, tornando Indaiatuba uma cidade mais
            inteligente e participativa.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="container">
        <div className="sobre-section-header">
          <h2>Conheça o time</h2>
          <hr className="sobre-section-bar" />
          <p>
            Cada integrante contribui com suas habilidades para construir uma
            solução completa e eficiente.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div 
                className={`avatar ${member.avatarClass}`}
                style={{
                  backgroundImage: member.photo ? `url('${member.photo}')` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {!member.photo && member.initials}
              </div>
              <h3>{member.name}</h3>
              <span className="role-badge">{member.role}</span>
              <p className="formation">{member.formation}</p>
              <div className="social-links">
                <a href={member.github} className="github" title="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href={member.linkedin} className="linkedin" title="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="sobre-section-header">
            <h2>Nosso Propósito</h2>
            <hr className="sobre-section-bar" />
          </div>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3>Missão</h3>
              <p>
                Criar uma ponte digital entre os cidadãos de Indaiatuba e os
                serviços municipais, simplificando o reporte de problemas
                urbanos.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3>Visão</h3>
              <p>
                Ser a principal plataforma de participação cidadã do município,
                promovendo uma cidade mais transparente e responsiva.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <h3>Valores</h3>
              <p>
                Transparência, inovação, acessibilidade e compromisso com a
                melhoria contínua da qualidade de vida dos moradores.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
}
export default Sobre;