import { useContext } from 'react';
import QuizContext from '../context/QuizContext';
import { FaArrowRight as ArrowRight } from 'react-icons/fa';

function NextQuestionBtn() {
  const { isAnswered, setIsAnswered, makeAnswers } = useContext(QuizContext);

  const handleClick = () => {
    if (isAnswered) {
      setIsAnswered(false);
      makeAnswers();
    }
  };

  return (
    <button
      className={`next-btn ${!isAnswered ? 'opacity-0 invisible' : null}`}
      onClick={handleClick}
    >
      Next Question
      <ArrowRight />
    </button>
  );
}
export default NextQuestionBtn;
