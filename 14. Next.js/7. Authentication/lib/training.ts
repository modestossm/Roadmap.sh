import db from './db';

type Training = {
  id: number;
  title: string;
  image: string;
  description: string;
};

export function getTrainings(): Training[] {
  return db.prepare<[], Training>('SELECT * FROM trainings').all();
}
