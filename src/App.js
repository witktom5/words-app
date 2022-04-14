import { QuizProvider } from './context/Quiz/QuizContext';
import { AlertProvider } from './context/Alert/AlertContext';

import AppBorder from './components/AppBorder';
import CardTop from './components/CardTop';
import QuestionsSection from './components/QuestionsSection';
import AnswersSection from './components/AnswersSection';
import CardBottom from './components/CardBottom';

function App() {
  return (
    <QuizProvider>
      <AlertProvider>
        <AppBorder>
          <CardTop />
          <QuestionsSection />
          <AnswersSection />
          <CardBottom />
        </AppBorder>
      </AlertProvider>
    </QuizProvider>
  );
}

export default App;
