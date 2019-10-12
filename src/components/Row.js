import React from 'react'

function Row(props) {
    const { item } = props;
    const eachItem = item ? Object.values(item) : null;
    return (
        <tr>
            {   
                eachItem ?
                eachItem.map((item, index) => {
                    return (
                        <td>{item}</td>
                    )
                }) : null
            }
        </tr>
    )
}

export default Row;