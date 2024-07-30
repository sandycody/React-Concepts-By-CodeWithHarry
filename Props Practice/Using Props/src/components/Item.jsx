import React from 'react'

const Item = (props) => {
    return (
        <>
            <ul style={{ listStyleType: "none" }}>
                {props.item.map(item => <li>{item}</li>)}
            </ul>
        </>
    )
}

export default Item;
