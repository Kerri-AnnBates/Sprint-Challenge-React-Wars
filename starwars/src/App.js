import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import axios from 'axios';
import CardComponent from './components/CardComponent';
import ButtonPagination from './components/Button';


// Component
const App = () => {

  const [peopleData, setPeopleData] = useState([]);
  const [mainData, setMainData] = useState({});
  const [next, setNext] = useState('https://swapi.co/api/people');
  const [previous, setPrevious] = useState(null);

  function nextPage() {
    setNext(mainData.next);
  }

  function previousPage() {
    setPrevious(mainData.previous);
  }

  useEffect(() => {
    axios.get(next)
      .then(response => {
        
        setPeopleData(response.data.results);
        setMainData(response.data);
      })
      .catch(error => {
        console.log('Data was not received', error);
      })
  }, [next]);

  return (
    <div className="App">
      <Container>
          <h1 className="Header">React Wars</h1>
          <div className="flex-container">
            {/* Loop through each data and display component for each one */}
            {peopleData.map((person, index) => (
              <CardComponent
                name={person.name}
                birth={person.birth_year}
                gender={person.gender}
                hairColor={person.hair_color}
                skinColor={person.skin_color}
                eyeColor={person.eye_color}
                key={index} 
              />
            ))}
        </div>
        <ButtonPagination nextPage={nextPage} previousPage={previousPage} />
      </Container>
    </div>
  );
}

export default App;
