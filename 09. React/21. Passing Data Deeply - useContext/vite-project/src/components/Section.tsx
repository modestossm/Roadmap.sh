import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';
import type { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren;

export default function Section({ children }: SectionProps) {
  const level = useContext(LevelContext);
  
  return (
     <section className="section">
      <LevelContext value={level + 1}>
        {children}
      </LevelContext>
    </section>
  );
}
