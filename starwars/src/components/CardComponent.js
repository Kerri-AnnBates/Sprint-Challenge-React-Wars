import React from 'react';
import NameTitle from './NameTitle';
import DetailsTable from './DetailsTable';
import { Card, CardText, CardBody, CardHeader } from 'reactstrap';
import styled from 'styled-components';

//Component Styles
const CardStyled = styled.div`
    width: 30%;
    margin: 2rem 0;
`;

//Component
function CardComponent(props) {
    const { name, birth, gender, hairColor, skinColor, eyeColor } = props

    return (
        <CardStyled>
            <Card>
                <CardHeader tag="h3"><NameTitle nameTitle={name} /></CardHeader>
                <CardBody>
                <DetailsTable
                        birth={birth}
                        gender={gender}
                        hairColor={hairColor}
                        skinColor={skinColor}
                        eyeColor={eyeColor}
                    />
                </CardBody>
            </Card>
        </CardStyled>
    )
}

export default CardComponent;