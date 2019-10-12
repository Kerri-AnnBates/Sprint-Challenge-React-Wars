import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

function ButtonPagination(props) {
    const { pageChanger, label, color } = props;

    return (
        <Button onClick={pageChanger} color={color} size="lg" block>{label}</Button>
    )
}

export default ButtonPagination;