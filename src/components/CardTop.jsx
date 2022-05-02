import { useContext, useEffect } from 'react';
import QuizContext from '../context/Quiz/QuizContext';
import AlertContext from '../context/Alert/AlertContext';

import { motion } from 'framer-motion';

import Alert from './Alert';

function CardTop() {
  const { score, lives, isCorrectAnswer } = useContext(QuizContext);
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    if (isCorrectAnswer) {
      setAlert('Correct!', 'success');
    } else if (isCorrectAnswer === false && lives > 0) {
      setAlert('Wrong!', 'danger');
    } else if (isCorrectAnswer === false && lives <= 0) {
      setAlert('Game Over', 'danger');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCorrectAnswer]);

  return (
    <div className='d-flex mt-2 mt-md-4 align-items-center'>
      <div className='d-flex'>
        <div className='d-flex flex-column me-2 align-items-center'>
          <h4 className='mb-0 text-light'>Score</h4>
          <div className='align-items-center my-2 py-2 px-4 me-auto shadow bg-card rounded'>
            <motion.div
              key={score}
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.1,
                y: { type: 'spring', stiffness: 500 },
              }}
            >
              <span className='text-success mx-auto fs-4 fw-bolder'>
                {score}
              </span>
            </motion.div>
          </div>
        </div>
        <div className='d-flex flex-column mx-3 align-items-center'>
          <h4 className='mb-0 text-light'>Lives</h4>
          <div className='align-items-center my-2 py-2 px-4 me-auto shadow bg-card rounded'>
            <motion.div
              key={lives}
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.1,
                y: { type: 'spring', stiffness: 500 },
              }}
            >
              <span className='text-danger mx-auto fs-4 fw-bolder'>
                {lives}
              </span>
            </motion.div>
          </div>
        </div>

        <Alert />
      </div>
    </div>
  );
}
export default CardTop;
