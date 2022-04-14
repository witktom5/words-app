import { useContext } from 'react';
import QuizContext from '../context/Quiz/QuizContext';
import { motion, AnimatePresence } from 'framer-motion';

function Questions() {
  const { question, isLoading } = useContext(QuizContext);

  return (
    <AnimatePresence>
      {!isLoading && (
        <motion.div
          key='questionAnimation'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='py-3 mt-0 mt-md-2 rounded-0 w-100 fw-bold rounded rounded-3 shadow mx-auto bg-question'>
            <div className='card-title fs-5 mx-3 px-3 my-0 text-center'>
              {question}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default Questions;
