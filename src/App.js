import { QuizProvider } from './context/Quiz/QuizContext';
import { AlertProvider } from './context/Alert/AlertContext';

import AppBorder from './components/AppBorder';
import InfoDisplay from './components/InfoDisplay';
import QuestionsSection from './components/QuestionsSection';
import AnswersSection from './components/AnswersSection';
import NextQuestionBtn from './components/NextQuestionBtn';

function App() {
  return (
    <QuizProvider>
      <AlertProvider>
        <AppBorder>
          <InfoDisplay />
          <QuestionsSection />
          <AnswersSection />
          <NextQuestionBtn />
        </AppBorder>
      </AlertProvider>
    </QuizProvider>
  );
}

export default App;
