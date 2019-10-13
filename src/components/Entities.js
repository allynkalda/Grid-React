import React from 'react';
import { useState } from 'react';
import { useFetch } from '../utils/fetch';
import { entitiesUrl } from '../config/config';
import Header from './Header';
import ContextMenu from './ContextMenu';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import Loader from 'react-loader-spinner';

function Entities() {

    const [ id, setId ] = useState(null);
    const data = useFetch(entitiesUrl);
    const loading = data[1];
    const headers = data && data[0] ? Object.keys(data[0].entities[0]) : null;
    const body = data && data[0] ? data[0].entities : null;
    const showButton = false;
    const rowClick = (item) => {
        setId(item)
    }

    return (
        <div>
            {
            loading ?
            <div className="loader">
            <Loader className="loader-inner"
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
             /></div> :
            <ContextMenu id={id}>
                <Header rowClick={rowClick}
                headers={headers} body={body} showButton={showButton}></Header>
            </ContextMenu>
            }
        </div>
    )
}

export default Entities;