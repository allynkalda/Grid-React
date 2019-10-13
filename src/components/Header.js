import React from 'react';
import Row from './Row';

function Header(props) {
    const { headers, body, showButton, rowClick } = props;
    return (
        <table>
            <thead>
            <tr>
                {headers ? headers.map( (item, index) => {
                    return (
                        <th key={index}>{item}</th>
                    )
                }) : null
                }
                {
                    showButton ? <th>Entities</th> : null
                } 
            </tr>
            </thead>
            <tbody>
                {
                    body ? body.map((item, index) => {
                        return (
                            <Row rowClick={rowClick} key={index} showButton={showButton} item={item}></Row>
                        )
                    }) : null
                }
            </tbody>
        </table>
    )
}

export default Header;