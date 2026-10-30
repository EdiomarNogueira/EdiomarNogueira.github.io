const tecnologias = [
  "PHP",
  "Laravel",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "React.js",
  "React Native",
  "CodeIgniter",
  "MySql/MariaDB",
  "PostgreSQL",
  "HTML5 & CSS"
];

const infraestrutura = [
  "XenServer",
  "FreeNAS",
  "Zabbix",
  "Grafana",
  "Bacula",
  "LDAP",
];

const tecnico = [
  "Montagem e Manutenção de Computadores",
  "Diagnóstico e Reparo de Hardware",
  "Manutenção Preventiva e Corretiva",
  "Instalação e Configuração de Sistemas Operacionais",
  "Instalação de Softwares e Drivers",
  "Configuração e Manutenção de Redes",
  "Backup e Recuperação de Dados",
  "Suporte Técnico ao Usuário",
  "Montagem e Configuração de Servidores",
];

interface ExperienciaProps {
  titulo: string,
  tempo: string;
  itens: string[]
};

function GrupoExperiencia({ titulo, tempo, itens}:ExperienciaProps) {
  return (
    <section className="sidebar-grupo">
      <h3>{titulo}</h3>
      <span className="sidebar-tempo">{tempo} de experiência</span>

      {itens.length > 0 && (
        <div className="sidebar-tags">
          {itens.map((item) => (
            <span className="sidebar-tag" key={item}>
              {item}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="sidebar-grupo">
        <h3>Formação acadêmica</h3>

        <div className="sidebar-formacao">
          <strong>Bacharel em Sistemas de Informação</strong>
          <span>IFBA · Concluído em 2023</span>
        </div>

        <div className="sidebar-formacao">
          <strong>Técnico em Informática</strong>
          <span>IFBA · Concluído em 2008</span>
        </div>
      </section>

      <GrupoExperiencia
        titulo="Desenvolvimento Full Stack"
        tempo="5 anos"
        itens={tecnologias}
      />

      <GrupoExperiencia
        titulo="Infraestrutura de TI"
        tempo="5 anos"
        itens={infraestrutura}
      />

      <GrupoExperiencia
        titulo="Suporte Técnico em Informática"
        tempo="18 anos"
        itens={tecnico}
      />
    </aside>
  );
}