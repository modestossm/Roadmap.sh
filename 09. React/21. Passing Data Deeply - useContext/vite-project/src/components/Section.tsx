import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';
import type { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  isFancy?: boolean;
}

export default function Section({ children, isFancy = false }: SectionProps) {
  const level = useContext(LevelContext);
  
  return (
    <section className={
      'section ' +
      (isFancy ? 'fancy' : '')
    }>
      <LevelContext value={level + 1}>
        {children}
      </LevelContext>
    </section>
  );
}
