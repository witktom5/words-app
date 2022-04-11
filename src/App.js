import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import randomWords from 'random-words';

import AppBorder from './components/AppBorder';
import ScoreDisplay from './components/ScoreDisplay';
import Questions from './components/Questions';
import Answers from './components/Answers';

function App() {
  return (
    <AppBorder>
      <ScoreDisplay />
      <Questions />
      <Answers />
    </AppBorder>
  );
}

export default App;
