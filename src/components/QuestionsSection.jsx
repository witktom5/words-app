import { useContext } from 'react';
import QuizContext from '../context/QuizContext';

function Questions() {
  const { question, isLoading } = useContext(QuizContext);

  return isLoading ? (
    <></>
  ) : (
    <div className='py-3 mt-2 rounded-0 w-100 fw-bold rounded rounded-3 shadow mx-auto bg-question'>
      <div className='card-title fs-5 mx-3 px-3 my-0 text-center'>
        {question}
      </div>
    </div>
  );
}
export default Questions;
