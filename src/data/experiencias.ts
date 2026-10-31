export type Experiencia = {
  id: string;
  periodo: string;
  cargo: string;
  empresa: string;
  resumo: string;
  tecnologias?: string[];
};

export const experiencias: Experiencia[] = [
  {
    id: "experiencia-1",
    periodo: "2022 — Atual",
    cargo: "Seu cargo mais recente",
    empresa: "Elleven Tecnologia",
    resumo: "Desenvolvimento e manutenção de sistemas web e aplicativos, com atuação no front-end, back-end e bancos de dados, desde a implementação de funcionalidades até a entrega das soluções.",
    tecnologias: ["PHP", "Laravel","Node.js","JavaScript","TypeScript","React.js","React Native","CodeIgniter","MySql/MariaDB","PostgreSQL","HTML5 & CSS"],
  },
  {
    id: "experiencia-2",
    periodo: "2017 — 2022",
    cargo: "Técnico em Sistemas de Informática",
    empresa: "Quality Internet",
    resumo: "Suporte aos usuários e manutenção da infraestrutura de TI, com atuação em servidores, monitoramento de ambientes, rotinas de backup e manutenção de computadores.",
    tecnologias: ["XenServer", "FreeNAS","Zabbix","Grafana","Bacula","LDAP","Montagem e Manutenção de Computadores", "Instalação e Configuração de Sistemas Operacionais","Instalação de Softwares e Drivers","Backup e Recuperação de Dados","Suporte Técnico ao Usuário"],
  },
  {
    id: "experiencia-3",
    periodo: "2017 — 2022",
    cargo: "Técnico em Sistemas de Informática",
    empresa: "IBR HOSPITAL",
    resumo: "Suporte técnico aos usuários no ambiente hospitalar, com manutenção de computadores, instalação e configuração de sistemas e apoio à continuidade das atividades dos setores.",
    tecnologias: ["Montagem e Manutenção de Computadores", "Instalação e Configuração de Sistemas Operacionais","Instalação de Softwares e Drivers","Backup e Recuperação de Dados","Suporte Técnico ao Usuário"],
  },
  {
    id: "experiencia-4",
    periodo: "2014 - 2016",
    cargo: "Auxiliar de CPD",
    empresa: "Cambuí Veículos",
    resumo: "Apoio às rotinas do CPD, com suporte aos usuários, manutenção de computadores, instalação de programas e acompanhamento de backups.",
    tecnologias: ["Montagem e Manutenção de Computadores", "Instalação e Configuração de Sistemas Operacionais","Instalação de Softwares e Drivers","Backup e Recuperação de Dados","Suporte Técnico ao Usuário"],
  },
];
