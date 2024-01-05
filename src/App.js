import './App.css';
import Community from './components/community/Community';
import Hero from './components/hero/Hero';
import Navbar from './components/nav/Navbar';
import Weare from './components/weare/weare';

function App() {
  
  return (
    <div className="App font-cabin">
      
      <Navbar/>
      
      
      <Hero/>
      <Community/>
      <Weare/>
    </div>
  );
}

export default App;
