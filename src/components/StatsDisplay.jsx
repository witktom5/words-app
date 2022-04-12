import { useContext } from 'react';
import QuizContext from '../context/QuizContext';

function ScoreDisplay() {
  const { score, lives } = useContext(QuizContext);

  return (
    <div className='d-flex mt-4'>
      <div className='d-flex flex-column me-3 align-items-center'>
        <h3 className='mb-0 text-light'>Score</h3>
        <div className='align-items-center my-2 py-2 px-4 me-auto shadow bg-card rounded'>
          <span className='text-success mx-auto fs-4 fw-bolder'>{score}</span>
        </div>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <h3 className='mb-0 text-light'>Lives</h3>
        <div className='align-items-center my-2 py-2 px-4 me-auto shadow bg-card rounded'>
          <span className='text-danger mx-auto fs-4 fw-bolder'>{lives}</span>
        </div>
      </div>
    </div>
  );
}
export default ScoreDisplay;
