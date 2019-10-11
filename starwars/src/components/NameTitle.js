import React from 'react';

function NameTitle(props) {
    const { nameTitle } = props;
    return (
        <>
            <h2>{nameTitle}</h2>
        </>
    )
}

export default NameTitle;