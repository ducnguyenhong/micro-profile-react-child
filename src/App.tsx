import Intro from './components/intro';
import { Provider } from './components/ui/provider';

function App() {
  return (
    <Provider>
      <Intro />
    </Provider>
  );
}

export default App;
