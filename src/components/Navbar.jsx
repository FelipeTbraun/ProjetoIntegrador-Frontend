function Navbar() {
  return (
    <nav className="topo">
      <div className="navbar-container">
        <a href="#" className="sosi-btn">
          <span className="sos">SOS</span>
          <span className="i">I</span>
        </a>

        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/formularios">Formulários</a></li>

          <li className="logo-item">
            <img
              src="https://preview.redd.it/3qe3e6awkjb01.png"
              alt="Logo"
              className="Iogo"
            />
          </li>

          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>

        <div className="auth-links">
          <a href="/perfil">Perfil</a>
          <a href="/log">Log</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;