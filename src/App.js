import 'bootstrap/dist/css/bootstrap.min.css';

import { QuizProvider } from './context/QuizContext';

import AppBorder from './components/AppBorder';
import StatsDisplay from './components/StatsDisplay';
import QuestionsSection from './components/QuestionsSection';
import AnswersSection from './components/AnswersSection';
import NextQuestionBtn from './components/NextQuestionBtn';

function App() {
  return (
    <QuizProvider>
      <AppBorder>
        <StatsDisplay />
        <QuestionsSection />
        <AnswersSection />
        <NextQuestionBtn />
      </AppBorder>
    </QuizProvider>
  );
}

export default App;
