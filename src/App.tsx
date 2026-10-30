import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import "./App.css";

export default function App() {
  return (
    <div className="pagina">
      <Header />

      <div className="conteudo">
        <Sidebar />

        <main className="principal">
          <Section icon="◈" title="Sobre mim">
            <p>Escreva aqui sua apresentação profissional.</p>
          </Section>
          

          <Section icon="▣" title="Experiência profissional">
            <p>Adicione suas experiências aqui.</p>
          </Section>

          <Section icon="◇" title="Complementação Acadêmica">
            <p>Adicione seus projetos aqui.</p>
          </Section>

          <Section icon="◇" title="Projetos">
            <p>Adicione seus projetos aqui.</p>
          </Section>
        </main>
      </div>
    </div>
  );
}