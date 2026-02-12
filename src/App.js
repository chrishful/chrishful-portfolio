import './App.css';
import Logo from './components/Logo';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <div className="Intro">
        <Logo />
        <p>Hi! Chris Hickman here.</p>
       </div>
       <SocialMedia />
      </div>
    </div>
  );
}

export default App;
