import React from 'react';
import Detail from './Detail';

function DetailsTable(props) {
    const {birth, gender, hairColor, skinColor, eyeColor } = props;

    return (
        <>
            <Detail 
                birth={birth}
                gender={gender}
                hairColor={hairColor}
                skinColor={skinColor}
                eyeColor={eyeColor}
            />
        </>
    )
}

export default DetailsTable;