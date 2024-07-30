import React from 'react';

const Empty = (props) => {
    return (
        <>
            {props.item.length === 0 && <h4>Shop is Empty</h4>}
        </>
    )
}

export default Empty;
