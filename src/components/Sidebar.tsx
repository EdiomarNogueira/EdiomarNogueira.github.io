import type { ReactNode } from "react";
import { GraduationCap, CodeXml, Server, Wrench } from "lucide-react";

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
  "Instalação e Configuração de Sistemas Operacionais",
  "Instalação de Softwares e Drivers",
  "Backup e Recuperação de Dados",
  "Suporte Técnico ao Usuário",
  "Montagem e Configuração de Servidores",
];

interface ExperienciaProps {
  icone: ReactNode;
  titulo: string,
  tempo: string;
  itens: string[]
};

function GrupoExperiencia({ icone, titulo, tempo, itens}:ExperienciaProps) {
  return (
    <section className="sidebar-grupo">
      <h3><span aria-hidden="true">{icone}</span>{titulo}</h3>
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
        <h3><GraduationCap size={18} aria-hidden="true" />Formação acadêmica</h3>

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
        icone={<CodeXml size={18} />}
        titulo="Desenvolvimento Full Stack"
        tempo="5 anos"
        itens={tecnologias}
      />

      <GrupoExperiencia
        icone={<Server size={18} />}
        titulo="Infraestrutura de TI"
        tempo="5 anos"
        itens={infraestrutura}
      />

      <GrupoExperiencia
        icone={<Wrench size={18} />}
        titulo="Suporte Técnico em Informática"
        tempo="18 anos"
        itens={tecnico}
      />
    </aside>
  );
}
