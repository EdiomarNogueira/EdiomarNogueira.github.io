import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
};

export default function Section({ title, icon, children }: SectionProps) {
  return (
    <section className="section">
      <h2>
        <span className="section-icon" aria-hidden="true">{icon}</span>
        {title}
      </h2>
      <div className="section-content">{children}</div>
    </section>
  );
}
