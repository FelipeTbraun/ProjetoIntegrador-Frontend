import Navbar from "../components/Navbar";
import "../styles/home.css"
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>
            Indaiatuba na palma da<br />
            <span>sua mão.</span>
          </h1>

          <p>
            Conectando cidadãos à prefeitura. Um sistema integrado para reportar problemas,
            acompanhar melhorias e transformar nossa cidade juntos.
          </p>

          <a href="/formularios" className="hero-btn">
             <i className="fa-solid fa-bullhorn"></i> Abrir Chamado
          </a>
        </div>
      </section>

      {/* FORM CARDS */}
      <section className="container">
        <div className="section-header">
          <h2>O que você deseja reportar?</h2>
          <p>
            Selecione a categoria do problema para enviar as informações.
          </p>
        </div>

        <div className="grid-forms">
         <a href="/formularios" className="form-card">
            <div className="icon-box"><i className="fa-solid fa-road"></i></div>
            <h3>Vias Públicas</h3>
            <p>Buracos na rua, calçadas danificadas...</p>
          </a>

          <a href="/formularios" className="form-card">
            <div className="icon-box"><i className="fa-solid fa-bolt"></i></div>
            <h3>Iluminação</h3>
            <p>Postes apagados ou fios caídos.</p>
          </a>

         <a href="/formularios" className="form-card">
            <div className="icon-box"><i className="fa-solid fa-traffic-light"></i></div>
            <h3>Trânsito</h3>
            <p>Semáforos quebrados ou sinalização.</p>
          </a>

          <a href="/formularios" className="form-card">
            <div className="icon-box"><i className="fa-solid fa-tree"></i></div>
            <h3>Meio Ambiente</h3>
            <p>Árvores caídas ou lixo acumulado.</p>
          </a>
        </div>
      </section>
    <Footer />
    </>
 
);
}

export default Home;