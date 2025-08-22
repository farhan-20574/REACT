import './App.css';
import PersonBio from './components/PersonBio';

function App() {
  return (
    <>
      <PersonBio name="Farhan" email="yahoo@msn.com" occupation="Sales">
        <ul>
          <li>Reading</li>
          <li>Traveling</li>
          <li>Gaming</li>
        </ul>

      </PersonBio>
    </>
  );
}

export default App;