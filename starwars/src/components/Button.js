import React from 'react';
import { Button } from 'reactstrap';

function ButtonPagination(props) {
    const { pageChanger, label, color } = props;

    return (
        <Button onClick={pageChanger} color={color} size="lg" block>{label}</Button>
    )
}

export default ButtonPagination;