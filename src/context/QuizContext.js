import { createContext, useState, useEffect, useRef } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState('First question placeholder');
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnswered, setIsAnswered] = useState(false);
  const [lives, setLives] = useState(3);
  const [streak, setStreak] = useState(1);

  const correctBtn = useRef(null);

  useEffect(() => {
    makeAnswers();
  }, []);

  // get a single word and its definition from random word api

  const fetchWord = async () => {
    const response = await fetch(`https://random-words-api.vercel.app/word`);
    const data = await response.json();
    const text = data[0].word;
    const definition = data[0].definition;

    // placeholder for testing
    // const rand = Math.random();
    // const text = `placeholder${rand}`;
    // const definition = `placeholder${rand}`;
    return { text, definition };
  };

  // set up a question: get 4 words and take definition of one to act as a question

  const makeAnswers = async () => {
    setIsAnswered(false);
    setIsLoading(true);
    const answerOne = await fetchWord();
    const answerTwo = await fetchWord();
    const answerThree = await fetchWord();
    const answerFour = await fetchWord();
    const theAnswers = [answerOne, answerTwo, answerThree, answerFour];
    setAnswers(theAnswers);

    // randomly choose one answer to form a question from its definition
    setQuestion(theAnswers[Math.floor(Math.random() * 4)].definition);

    setIsLoading(false);
  };

  // handle answer buttons - add proper classes, add score/decrement lives etc

  const handleAnswerButton = (e, answer) => {
    if (isAnswered || lives === 0) return;
    if (answer.definition === question) {
      e.target.classList.toggle('btn-success');
      setScore(score + 100 * streak);
      if (streak < 3) setStreak(streak + 1);
      setIsAnswered(true);
    } else {
      setLives(lives - 1);
      setStreak(1);
      e.target.classList.toggle('btn-danger');
      correctBtn.current.classList.toggle('btn-info');
      if (lives === 1) return;
      setIsAnswered(true);
    }
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        answers,
        score,
        lives,
        isLoading,
        isAnswered,
        correctBtn,
        setIsAnswered,
        handleAnswerButton,
        makeAnswers,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
