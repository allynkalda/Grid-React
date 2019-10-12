import React from 'react';
import { useFetch } from '../utils/fetch';
import { assetsUrl } from '../config/config';
import Header from './Header';

export default function Assets() {

const [ data, loading ] = useFetch(assetsUrl)

console.log(data)
console.log(loading)
    return (
        <div>
            <Header data={data}></Header>
        </div>
    )
}
