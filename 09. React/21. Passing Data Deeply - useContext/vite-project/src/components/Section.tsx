import { LevelContext } from './LevelContext.js';
import type { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  level: number;
}

export default function Section({ level, children }: SectionProps) {
  return (
    <section className="section">
      <LevelContext value={level}>
        {children}
      </LevelContext>
    </section>
  );
}
