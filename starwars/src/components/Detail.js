import React from 'react';

function Detail(props) {

    const {birth, gender, hairColor, skinColor, eyeColor } = props;
    
    return (
        <>
            <li>D.O.B: {birth}</li>
            <li>Gender: {gender}</li>
            <li>Skin Color: {skinColor}</li>
            <li>Hair Color: {hairColor}</li>
            <li>Eye Color: {eyeColor}</li>
        </>
    )
}

export default Detail;