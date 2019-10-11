import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

function ButtonPagination(props) {
    const { nextPage, previousPage } = props;
    return (
        <>
        <Button onClick={nextPage} color="warning" size="lg" block>See More</Button>
        <Button onClick={previousPage} color="secondary" size="lg" block>Go Back</Button>
        </>
    )
}

export default ButtonPagination;