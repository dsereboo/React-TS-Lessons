import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';



function App() {

  const personName={
    first:"Daniel",
    last:"Sereboo"
  }

  const names=[
    {
      first:"Ama",
      last:"Pipi"
    },
    {
      first:"Kwesi",
      last:"Dunyo"
    },
    {
      first:"Lois",
      last:"Bannerman"
    }
  ]

  return (
    <div className="App">
        <Greet name="Daniel" numOfMessages={10} isLoggedIn={true}/>
        <Person name={personName}/>
        <PersonList names={names}/>
        
    </div>
  );
}

export default App;
