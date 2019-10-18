import React from 'react';
import { useFetch } from '../utils/fetch';
import { assetsUrl } from '../config/config';
import Header from './Header';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import Loader from 'react-loader-spinner';

export default function Assets() {

const [ data, loading ] = useFetch(assetsUrl)
console.log('assets', data)
const headers = data && data.assets ? Object.keys(data.assets[0]) : null;
const body = data && data.assets ? data.assets : null;
const showButton = true;

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
             <Header headers={headers} body={body} showButton={showButton}></Header>
            }
        </div>
    )
}
