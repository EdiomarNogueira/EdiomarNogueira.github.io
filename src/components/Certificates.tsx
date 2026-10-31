import { useState } from "react";
import { certificados } from "../data/certificados";
import "./Certificates.css";

const quantidadePorVez = 6;

export default function Certificates() {
  const [quantidade, setQuantidade] = useState(quantidadePorVez);

  return (
    <div className="certificados">
      <p className="certificados-total">
        <strong>{certificados.length}</strong> {certificados.length === 1 ? "certificado" : "certificados"} no total
      </p>
      {certificados.length === 0 && <p>Os certificados serão adicionados em breve.</p>}
      <ul className="certificados-lista" aria-label="Certificados">
        {certificados.slice(0, quantidade).map((certificado) => (
          <li key={certificado.id}>
            <h3>{certificado.titulo}</h3>
            <span className="certificados-horas">{certificado.horas}h</span>
            <span className="certificados-instituicao">{certificado.instituicao}</span>
          </li>
        ))}
      </ul>

      {quantidade < certificados.length && (
        <button className="certificados-mais" type="button"
          onClick={() => setQuantidade((atual) => atual + quantidadePorVez)}>
          Ver mais
        </button>
      )}
      {quantidade > quantidadePorVez && (
        <button className="certificados-mais" type="button"
          onClick={() => setQuantidade(quantidadePorVez)}>
          Mostrar menos
        </button>
      )}
    </div>
  );
}
