
import type { ReactNode } from "react";

interface SectionProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export default function Section({
  icon,
  title,
  children,
}: SectionProps) {
  return (
    <section className="section">
      <h2>
        <span className="section-icon">{icon}</span>
        {title}
      </h2>

      <div className="section-content">
        {children}
      </div>
    </section>
  );
}
