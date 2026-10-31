import Header from "./components/Header";
import { UserRound, BriefcaseBusiness, Construction, Award } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Certificates from "./components/Certificates";
import About from "./components/About";
import "./App.css";

export default function App() {
  return (
    <div className="pagina">
      <Header />

      <div className="conteudo">
        <Sidebar />

        <main className="principal">

          <Section icon={<UserRound size={22} />} title="Sobre mim">
            <About />
          </Section>
          <Section icon={<BriefcaseBusiness size={22} />} title="Experiência profissional">
            <ExperienceTimeline />
          </Section>
          <Section icon={<Award size={22} />} title="Certificados e cursos">
            <Certificates />
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
