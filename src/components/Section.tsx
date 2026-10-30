export default function Section({ icon, title, children }) {
  return (
    <section className="section">
      <h2>
        <span className="section-icon">{icon}</span>
        {title}
      </h2>
      <div className="section-content">{children}</div>
    </section>
  ); 
}
