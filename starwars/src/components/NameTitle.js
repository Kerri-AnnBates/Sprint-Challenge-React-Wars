import React from 'react';
import styled from 'styled-components';

const NameHeader = styled.span`
    color: #E65722;
`;

function NameTitle(props) {
    const { nameTitle } = props;
    return (
        <>
            <NameHeader>{nameTitle}</NameHeader>
        </>
    )
}

export default NameTitle;