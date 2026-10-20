// Code block D: Rule 2 bug, index as key (Scene 7.6)
import { useState } from 'react';

function Card({ title }) {
  // Each card keeps its own note while you type
  const [note, setNote] = useState('');
  return (
    <li>
      <strong>{title}</strong>
      <input value={note} onChange={e => setNote(e.target.value)} placeholder="note..." />
    </li>
  );
}

export function Column() {
  const [cards, setCards] = useState([
    { id: 'c1', title: 'Fix login bug' },
    { id: 'c2', title: 'Update docs' },
  ]);

  const addReview = () =>
    setCards([{ id: 'c3', title: 'Review PR #42' }, ...cards]);

  return (
    <>
      <button onClick={addReview}>Add Review PR #42</button>
      <ul>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} />  {/* BUG: change to key={card.id} */}
        ))}
      </ul>
    </>
  );
}
// With key={index}: type a note on "Fix login bug", click the button.
// The note now sits on "Review PR #42" and "Fix login bug" is blank.
// With key={card.id}: every note stays with its card.
