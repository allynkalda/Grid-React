import React from 'react';
import { Link } from "react-router-dom";

export default function Button(props) {
    const { id } = props
    return (
        <Link style={{ textDecoration: 'none' }} to={`/entities/${id}`}>
            <button>Entities</button>
        </Link>
    )
}
