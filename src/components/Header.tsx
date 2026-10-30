export default function Header() {
  return (
    <header className="header">
      <img src="/images/perfil.jpg" alt="Foto de perfil" />
      <div>
        <h1>EDIOMAR AGUIAR NOGUEIRA</h1>
        <p>Desenvolvedor de Software</p>
        <div className="contatos">
          <a href="ediomar.a.n@gmail.com">Email</a>
          <a href="https://github.com/EdiomarNogueira" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ediomar-nogueira-b38921a0/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  );
}