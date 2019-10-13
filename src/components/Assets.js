import React from 'react';
import { useFetch } from '../utils/fetch';
import { assetsUrl } from '../config/config';
import Header from './Header';

export default function Assets() {

const [ data, loading ] = useFetch(assetsUrl)

const headers = data && data.assets ? Object.keys(data.assets[0]) : null;
const body = data && data.assets ? data.assets : null
const showButton = true;

console.log(loading)
    return (
        <div>
            <Header headers={headers} body={body} showButton={showButton}></Header>
        </div>
    )
}
