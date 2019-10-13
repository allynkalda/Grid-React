import React from 'react';
import { Link } from "react-router-dom";

export default function Button() {

    return (
        <Link style={{ textDecoration: 'none' }} to={'/entities'}>
            <button>Entities</button>
        </Link>
    )
}
