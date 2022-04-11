import { useState } from 'react';

function ScoreDisplay() {
  const [score, setScore] = useState(0);

  return (
    <div className='card my-3 pt-2 mx-auto border-3 rounded-pill w-50'>
      <div className='card-title mb-0 d-flex mx-auto pt-1 fs-5 text-primary'>
        Score
      </div>
      <div className='card-body text-success pt-1 pb-2 text-center fs-4'>
        {score}
      </div>
    </div>
  );
}
export default ScoreDisplay;
