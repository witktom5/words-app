import { useContext } from 'react';
import QuizContext from '../context/Quiz/QuizContext';
import AlertContext from '../context/Alert/AlertContext';
import { FaArrowRight as ArrowRight, FaRedoAlt } from 'react-icons/fa';
import StreakDisplay from './StreakDisplay';

function CardBottom() {
  const { isAnswered, setIsAnswered, makeAnswers, lives, restart } =
    useContext(QuizContext);
  const { removeAlert } = useContext(AlertContext);

  const handleClick = async () => {
    if (isAnswered) {
      setIsAnswered(false);
      removeAlert();
      makeAnswers();
    }
  };

  const handleRestartBtn = () => {
    removeAlert();
    restart();
  };

  return (
    <div className='d-flex align-items-center'>
      <StreakDisplay />
      {lives > 0 ? (
        <button
          className={`btn-next ${!isAnswered ? 'opacity-0 invisible' : null}`}
          onClick={handleClick}
        >
          Next Question
          <ArrowRight />
        </button>
      ) : (
        <button className={`btn-next`} onClick={handleRestartBtn}>
          Restart
          <FaRedoAlt />
        </button>
      )}
    </div>
  );
}
export default CardBottom;
