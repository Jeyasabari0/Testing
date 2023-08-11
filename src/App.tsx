import './App.css';
import { Application } from './Components/Application/Application';
import { Counter } from './Components/Counter/Counter';
import { Mui } from './Components/MUI/Mui';
import { Skills } from './Components/Skills/Skills';
import { AppProviders } from './Provider/app-provider';



function App() {
  return (
    <AppProviders>
      <div className="App">
      <Application />
      <Skills skills={['html', 'css', 'js']} />
      <Counter />
      <Mui />
    </div>
    </AppProviders>
  );
}

export default App;
