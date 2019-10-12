import React from 'react';
import Row from './Row';


function Header(props) {
    const { data } = props;
    const items = data && data.assets ? Object.keys(data.assets[0]) : null;
    console.log(items)
    return (
        <table>
            <thead>
            <tr>
                {items ? items.map( (item, index) => {
                    return (
                        <th key={index}>{item}</th>
                    )
                }) : null
                }
            </tr>
            </thead>
            <tbody>
                {
                    data && data.assets ? data.assets.map((item, index) => {
                        return (
                            <Row item={item}></Row>
                        )
                    }) : null
                }
            </tbody>
        </table>
    )
}

export default Header;