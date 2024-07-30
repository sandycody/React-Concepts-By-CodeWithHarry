import React from 'react';

const Empty = ({item}) => {
    return (
        <>
            {item.length === 0 && <h3>Shop is Empty</h3>}
        </>
    )
}

export default Empty;
