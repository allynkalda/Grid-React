import React from 'react';
import Button from './Button';

function Row(props) {

    const { item, showButton, rowClick } = props;
    const eachItem = item ? Object.values(item) : null;
    
    return (
        <tr onContextMenu={() => rowClick(item.id)}>
            {   
                eachItem ?
                eachItem.map((item, index) => {
                    return (
                        <td key={index}>{item}</td>
                    )
                }) : null
            }
            {
                showButton ? <td><Button></Button></td> : null
            }
        </tr>
    )
}

export default Row;