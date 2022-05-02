import { useContext } from 'react';
import QuizContext from '../context/Quiz/QuizContext';

function StreakDisplay() {
  const { streak } = useContext(QuizContext);

  return (
    <div className='d-flex flex-column align-items-center ms-0 me-2 mb-1 streak-display'>
      <h4 className='text-light fs-6'>Streak</h4>
      <div className='streak-bg'>
        <div className={`streak ${streak > 2 && 'streak-on'}`}></div>
        <div className={`streak ${streak > 1 && 'streak-on'}`}></div>
      </div>
    </div>
  );
}
export default StreakDisplay;
