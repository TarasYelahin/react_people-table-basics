import { Link } from 'react-router-dom';
import { Person } from '../types';

type Props = {
  name: string;
  sex?: string;
  people: Person[];
};
export const PersonLink = ({ name, sex, people }: Props) => {
  const person = people.find(p => p.name === name);

  if (!person) {
    return <span>{name}</span>;
  }

  return (
    <Link
      to={`/people/${person.slug}`}
      className={sex === 'f' ? 'has-text-danger' : ''}
    >
      {name}
    </Link>
  );
};
