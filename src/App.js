import './App.css';
import Community from './components/community/Community';
import Explore from './components/explore/Explore';
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
      <Explore/>
    </div>
  );
}

export default App;
