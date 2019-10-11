import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import axios from 'axios';
import CardComponent from './components/CardComponent';

// Component Styles
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// Component
const App = () => {

  const [peopleData, setPeopleData] = useState([]);

  // Fetch data from API
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
      <Container>
          <h1 className="Header">React Wars</h1>
          <FlexContainer>
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
        </FlexContainer>
      </Container>
    </div>
  );
}

export default App;
