import React from 'react';
import NameTitle from './NameTitle';
import DetailsTable from './DetailsTable';

function Card(props) {
    const { name, birth, gender, hairColor, skinColor, eyeColor } = props
    // console.log(birth);

    return (
    <div className='card'>
                <NameTitle nameTitle={name} />
                <DetailsTable
                    birth={birth}
                    gender={gender}
                    hairColor={hairColor}
                    skinColor={skinColor}
                    eyeColor={eyeColor}
                />
            </div>
    )
}

export default Card;