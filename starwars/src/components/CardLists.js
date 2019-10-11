import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

function CardLists() {
  const [peopleCount, setPeopleCount] = useState('');

  useEffect(() => {
    axios.get(`https://swapi.co/api/people`)
    .then(response => {
      console.log(response.data);
      setPeople(response);
    })
    .catch(error => {
      console.log('Data was not received', error);
    })
  }, []);

    return (
        <>
            <h1>CCard list</h1>
        </>
    )
}

export default CardLists;