import './App.css';
import React from 'react';
import PersonCards from '../src/components/PersonCards';

function App() {
  return (
   <div ClassName="central">
    <PersonCards firstName="Doe" lastName="Jane" age={45} hairColor={"Black"}/> 
    <PersonCards firstName="Smith" lastName="John" age={88} hairColor={"Brown"}/> 
    <PersonCards firstName="Filmore" lastName="Millard" age={50} hairColor={"Brown"}/> 
    <PersonCards firstName="Smith" lastName="Maria" age={62} hairColor={"Brown"}/> 
   </div>
  );
}

export default App;
