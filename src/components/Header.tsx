
const contatos = [
  {
    icon: "✉",
    label: "Email",
    texto: "ediomar.a.n@gmail.com",
    url: "mailto:ediomar.a.n@gmail.com",
  },
  {
    icon: "◈",
    label: "GitHub",
    texto: "EdiomarNogueira",
    url: "https://github.com/EdiomarNogueira",
  },
  {
    icon: "▣",
    label: "LinkedIn",
    texto: "Perfil profissional",
    url: "https://www.linkedin.com/in/ediomar-nogueira-b38921a0/",
  },
  {
    icon: "☎",
    label: "Telefone",
    texto: "Não informado",
    url: null,
  },
  {
    icon: "◎",
    label: "Facebook",
    texto: "Perfil",
    url: "https://www.facebook.com/Ediomar.Nogueira",
  },
];

export default function Header() {
  return (
    <header className="header">
      <div className="header-topo">
        <img
          className="header-foto"
          src="/images/perfil.jpg"
          alt="Foto de Ediomar Aguiar Nogueira"
        />

        <div className="header-apresentacao">
          <span className="header-categoria">
            DESENVOLVEDOR DE SOFTWARE
          </span>

          <h1>EDIOMAR AGUIAR NOGUEIRA</h1>

          <p className="header-descricao">
            Desenvolvedor Full Stack | Sistemas Web e Mobile
          </p>

          <div className="header-detalhes">
            <span>⌖ Vitória da Conquista - BA</span>
            <span>33 anos</span>
          </div>
        </div>
      </div>

      <div className="header-contatos">
        {contatos.map((contato) => (
          <div className="header-contato" key={contato.label}>
            <span className="contato-icone" aria-hidden="true">
              {contato.icon}
            </span>

            <div className="contato-informacao">
              <span className="contato-label">
                {contato.label}
              </span>

              {contato.url ? (
                <a
                  href={contato.url}
                  target={
                    contato.url.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    contato.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {contato.texto}
                </a>
              ) : (
                <span className="contato-pendente">
                  {contato.texto}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
