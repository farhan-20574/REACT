import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar>
       <div className="container" />
      </Navbar>
      <Hero>
        <div className="container" />
      </Hero>
    </>
  );
}

export default App;