import './App.css';
import Greeting from './components/Greeting';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <h1>My media sharing React app</h1>
      <Greeting />
      <Home />
    </>
  );
};

export default App;
