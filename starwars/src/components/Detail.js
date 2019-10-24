import React from 'react';
import styled from 'styled-components';

// Styles
const ListItem = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ItemTitle = styled.span`
    font-weight: bold;
`;

function Detail(props) {

    const {birth, gender, hairColor, skinColor, eyeColor } = props;
    
    return (
        <div>
            <ListItem>
                <li><ItemTitle>D.O.B:</ItemTitle> {birth}</li>
                <li><ItemTitle>Gender:</ItemTitle> {gender}</li>
                <li><ItemTitle>Skin Color:</ItemTitle> {skinColor}</li>
                <li><ItemTitle>Hair Color:</ItemTitle> {hairColor}</li>
                <li><ItemTitle>Eye Color:</ItemTitle> {eyeColor}</li>
            </ListItem>
        </div>
    )
}

export default Detail;