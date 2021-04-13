import React from 'react';
import './App.css'; 
import PersonCard from './Components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard firstName = "Jane" lastName = "Doe" age = {45} hairColor ="clack"/>
      <PersonCard firstName = "John" lastName = "Smith" age = {80} hairColor ="brown"/>
      <PersonCard firstName = "Fillmore" lastName = "Millard" age = {50} hairColor ="brown"/>
      <PersonCard firstName = "Maria " lastName = "Smith" age = {62} hairColor ="brown"/>
    </div>
  );
}


export default App;
