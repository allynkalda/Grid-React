import React from 'react';
import Button from './Button';

function Row(props) {

    const { item, showButton, id } = props;
    const eachItem = item ? Object.values(item) : null;
    
    return (
        <tr className={`row-${id}`}>
            {   
                eachItem ?
                eachItem.map((item, index) => {
                    return (
                        <td key={index}>{item}</td>
                    )
                }) : null
            }
            {
                showButton ? <td id="button-td"><Button id={id}></Button></td> : null
            }
        </tr>
    )
}

export default Row;