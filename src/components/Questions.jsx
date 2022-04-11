import { useState } from 'react';

function Questions() {
  const [question, setQuestion] = useState(
    'First question or some kind of intro'
  );

  return (
    <div class='card py-3 rounded-0 w-100 rounded rounded-3 shadow mx-auto'>
      <div className='card-title mx-3 px-3'>{question}</div>
    </div>
  );
}
export default Questions;
