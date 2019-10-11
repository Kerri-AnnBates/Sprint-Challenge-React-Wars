import CardList from './components/Card';
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';

  

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // const [peopleCount, setPeopleCount] = useState('');
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people`)
      .then(response => {
        // console.log(response.data);
        setPeopleData(response.data.results);
      })
      .catch(error => {
        console.log('Data was not received', error);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {peopleData.map((person, index) => (
        <Card name={person.name} key={index} />
      ))}
    </div>
  );
}

export default App;
