import { Stats } from 'fs';
import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';




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
        <Greet name="Daniel" numOfMessages={10} isLoggedIn={false}/>
        {/* <Person name={personName}/>
        <PersonList names={names}/>
        <Status status='loading'/>
        <Heading>Placeholder Text </Heading> */}
        <Oscar>
          <Heading>Oscar is receiving an award</Heading>
        </Oscar>
        <Button handleClick={(event,id)=>console.log("Hey", event, id)}/>
        <Input value=''  handleChange={(event)=>{console.log(event)}}/>
        
    </div>
  );
}

export default App;
