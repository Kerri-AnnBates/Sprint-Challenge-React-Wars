import React, {useState, useEffect} from 'react';
import './App.css';
import { Container } from 'reactstrap';
import axios from 'axios';
import CardComponent from './components/CardComponent';
import ButtonPagination from './components/Button';
import SearchForm from './components/SearchForm';


// Component
const App = () => {

  const [peopleData, setPeopleData] = useState([]);
  const [mainData, setMainData] = useState({});
  const [page, setPage] = useState('https://swapi.co/api/people');
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  function nextPage() {
    setPage(mainData.next);
  }

  function previousPage() {
    setPage(mainData.previous);
  }

  function searchCharacters(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    axios.get(page)
      .then(response => {
        setPeopleData(response.data.results);
        setFilteredData(response.data.results);
        setMainData(response.data);
      })
      .catch(error => {
        console.log('Data was not received', error);
      })
  }, [page]);

  useEffect(() => {
    setFilteredData(
      peopleData.filter((person) => {
        return person.name.toLowerCase().includes(inputValue.toLowerCase());
      })
    );
    
  }, [inputValue])

  console.log(filteredData);
  return (
    <div className="App">
      <Container>
          <h1 className="Header">React Wars</h1>
          <SearchForm searchCharacters={searchCharacters} />
          <div className="flex-container">
            {/* Loop through each data and display component for each one */}

            {filteredData.map((person, index) => (
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
        <ButtonPagination pageChanger={nextPage} label='Next Page' color='warning' />
        <ButtonPagination pageChanger={previousPage} label='Go Back' color='secondary' />
      </Container>
    </div>
  );
}

export default App;
