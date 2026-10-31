import Header from "./components/Header";
import { UserRound, BriefcaseBusiness, Construction } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import ExperienceTimeline from "./components/ExperienceTimeline";
import "./App.css";

export default function App() {
  return (
    <div className="pagina">
      <Header />

      <div className="conteudo">
        <Sidebar />

        <main className="principal">

          <Section icon={<UserRound size={22} />} title="Sobre mim">
            <p className="sobre-mim-texto">Sou de Vitória da Conquista, Bahia, e minha trajetória em tecnologia começou pela curiosidade de entender como os sites funcionavam e pela vontade de criar meus próprios sistemas. Essa motivação me levou ao IFBA, onde me formei técnico em Informática e, depois, bacharel em Sistemas de Informação.

              Ao longo da minha formação, conciliei os estudos com a atuação em empresas, adquirindo experiências que vão da manutenção de computadores ao desenvolvimento e à entrega de sistemas de alta complexidade. Essa trajetória me proporcionou uma visão ampla da tecnologia e dos desafios de transformar necessidades em soluções.

              Continuo movido pela mesma curiosidade que me trouxe até aqui, buscando aprender, aprimorar minhas habilidades e construir novos projetos.</p>
          </Section>
          <Section icon={<BriefcaseBusiness size={22} />} title="Experiência profissional">
            <ExperienceTimeline />
          </Section>
          <Section icon={<Construction size={22} />} title="Em Construção">
            <p>Continuação em Breve...</p>
          </Section>
          {/*
         
          

          <Section icon="◇" title="Complementação Acadêmica">
            <p>Adicione seus projetos aqui.</p>
          </Section>

          <Section icon="◇" title="Projetos">
            <p>Adicione seus projetos aqui.</p>
          </Section>*/}
        </main>
      </div>
    </div>
  );
}
