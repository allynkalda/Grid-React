import React from 'react';
import { useState } from 'react';
import { useFetch } from '../utils/fetch';
import { entitiesUrl } from '../config/config';
import Header from './Header';
import ContextMenu from './ContextMenu';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import Loader from 'react-loader-spinner';

function Entities(props) {

   // const [ id, setId ] = useState(null);
    const [ data, loading ] = useFetch(entitiesUrl);
    const id = props.match.params.id

    console.log(id)
    
    const body = data && data.entities ? data.entities.filter( item => item.id_asset == id) : null
    const headers = body ? Object.keys(body[0]) : null;
    console.log(body)
    const showButton = false;
    // const rowClick = (item) => {
    //     setId(item)
    // }

    console.log('entities', data)

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
                <Header headers={headers} body={body} showButton={showButton}></Header>
            </ContextMenu>
            } 
        

        </div>
    )
}

export default Entities;