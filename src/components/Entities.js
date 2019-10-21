import React from 'react';
import { useFetch } from '../utils/fetch';
import { entitiesUrl } from '../config/config';
import Header from './Header';
import ContextMenu from './ContextMenu';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import Loader from 'react-loader-spinner';

function Entities(props) {

    const [ data, loading ] = useFetch(entitiesUrl);
    const id = props.match.params.id
    const body = data && data.entities ? data.entities.filter( item => item.id_asset == id) : null
    const headers = body ? Object.keys(body[0]) : null;
    const showButton = false;
    
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