import React from 'react';
import { useState } from 'react';
import { useFetch } from '../utils/fetch';
import { entitiesUrl } from '../config/config';
import Header from './Header';
import ContextMenu from './ContextMenu';

function Entities() {

    const [ id, setId ] = useState(null);
    const data = useFetch(entitiesUrl)
    const headers = data && data[0] ? Object.keys(data[0].entities[0]) : null;
    const body = data && data[0] ? data[0].entities : null;
    const showButton = false;

    const rowClick = (item) => {
        setId(item)
    }

    return (
        <div>
            <ContextMenu id={id}>
            <Header rowClick={rowClick}
            headers={headers} body={body} showButton={showButton}></Header>
            </ContextMenu>
        </div>
    )
}

export default Entities;