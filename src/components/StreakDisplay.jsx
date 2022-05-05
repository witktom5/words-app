import { useContext } from 'react';
import QuizContext from '../context/Quiz/QuizContext';

function StreakDisplay() {
  const { streak } = useContext(QuizContext);

  return (
    <div className='d-flex align-items-center ms-0 me-2 mb-3 streak-display gap-2'>
      <div className='streak-bg'>
        <div className={`streak ${streak > 2 && 'streak-on'}`}></div>
        <div className={`streak ${streak > 1 && 'streak-on'}`}></div>
      </div>
      <h4 className='text-light fs-6 m-0 p-0'>Streak</h4>
    </div>
  );
}
export default StreakDisplay;
