export type Language = {
  id: number;
  title: string;
  content: string;
};

export type Props = {
  topic: Language;
  onTitleClick: () => void;
  isOpen: boolean;
};

export function TopicCard({ topic, onTitleClick, isOpen }: Props) {
  return (
    <>
      <div className="name" onClick={onTitleClick}>
        <div className="topic-title">
          <h3>{topic.title}</h3>
        </div>
        {isOpen && <div className="topicContent"> {topic.content}</div>}
      </div>
    </>
  );
}

//   {isOpen ? <div className="topicContent"> {topic.content} </div> : null; = conditional rendering */
// unable to do animation with this conditional rendering, unless you use a library
