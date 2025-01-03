import { useState } from 'react';
import { TopicCard } from './TopicCard';
import './App';

export type Language = {
  id: number;
  title: string;
  content: string;
};

export type Props = {
  topics: Language[];
};

export function Accordion({ topics }: Props) {
  const [openIndex, setOpenIndex] = useState<number>();

  return (
    <div className="accordion-wrapper">
      {topics.map((t) => (
        <TopicCard
          key={t.id}
          topic={t}
          isOpen={openIndex === t.id}
          onTitleClick={() =>
            openIndex === t.id ? setOpenIndex(undefined) : setOpenIndex(t.id)
          }
        />
      ))}
    </div>
  );
}
