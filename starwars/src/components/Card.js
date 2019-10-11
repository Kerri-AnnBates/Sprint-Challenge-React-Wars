import React from 'react';
import NameTitle from './NameTitle';
import DetailsTable from './DetailsTable';

function Card(props) {
    const { name } = props
    console.log(name);

    return (
    <div className='card'>
                <NameTitle nameTitle={name} />
                <DetailsTable />
            </div>
    )
}

export default Card;