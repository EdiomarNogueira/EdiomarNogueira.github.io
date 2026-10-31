import { experiencias } from "../data/experiencias";
import "./ExperienceTimeline.css";

export default function ExperienceTimeline() {
  return (
    <ol className="linha-tempo" aria-label="Trajetória profissional">
      {experiencias.map((experiencia, index) => (
        <li className="experiencia" key={experiencia.id}
          style={{ animationDelay: `${index * 80}ms` }}>
          <small>{experiencia.periodo}</small>
          <h3>{experiencia.cargo}</h3>
          <span>{experiencia.empresa}</span>
          <p>{experiencia.resumo}</p>

          {!!experiencia.tecnologias?.length && (
            <footer>
              <small>Tecnologias utilizadas</small>
              <ul className="tecnologias">
                {experiencia.tecnologias.map((tecnologia) => (
                  <li key={tecnologia}>{tecnologia}</li>
                ))}
              </ul>
            </footer>
          )}
        </li>
      ))}
    </ol>
  );
}
