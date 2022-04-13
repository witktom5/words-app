import { useContext } from 'react';
import QuizContext from '../context/Quiz/QuizContext';
import AlertContext from '../context/Alert/AlertContext';
import { FaArrowRight as ArrowRight } from 'react-icons/fa';

function NextQuestionBtn() {
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

  return lives > 0 ? (
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
      <ArrowRight />
    </button>
  );
}
export default NextQuestionBtn;
