import { useContext } from 'react';
import QuizContext from '../context/Quiz/QuizContext';
import Spinner from './Spinner';

import { motion, AnimatePresence } from 'framer-motion';

function Answers() {
  const { answers, isLoading, correctBtn, question, handleAnswerButton } =
    useContext(QuizContext);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Spinner />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='py-3 my-3 w-100 rounded rounded-3 mx-auto bg-card shadow'>
            <div className='card-body mx-3 px-3'>
              <div className='row mb'>
                <div className='col-12 col-lg-6 mb-2'>
                  <button
                    className='btn btn-outline btn-secondary w-100'
                    onClick={(e) => handleAnswerButton(e, answers[0])}
                    ref={answers[0].definition === question ? correctBtn : null}
                  >
                    {answers[0].text}
                  </button>
                </div>
                <div className='col-12 col-lg-6 mb-2'>
                  <button
                    className='btn btn-outline btn-secondary w-100'
                    onClick={(e) => handleAnswerButton(e, answers[1])}
                    ref={answers[1].definition === question ? correctBtn : null}
                  >
                    {answers[1].text}
                  </button>
                </div>
              </div>

              <div className='row'>
                <div className='col-12 col-lg-6 mb-2'>
                  <button
                    className='btn btn-outline btn-secondary w-100'
                    onClick={(e) => handleAnswerButton(e, answers[2])}
                    ref={answers[2].definition === question ? correctBtn : null}
                  >
                    {answers[2].text}
                  </button>
                </div>
                <div className='col-12 col-lg-6 mb-2'>
                  <button
                    className='btn btn-outline btn-secondary w-100'
                    onClick={(e) => handleAnswerButton(e, answers[3])}
                    ref={answers[3].definition === question ? correctBtn : null}
                  >
                    {answers[3].text}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default Answers;
