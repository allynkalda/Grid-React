import React from 'react';
import { useRef, useState } from "react";

const ContextMenu = (props) => {


    const ref = useRef();
    const [visible, setVisible] = useState(false);

    const showContentMenu = (e) => {
        e.preventDefault();
        setVisible(true);
        ref.current.style.display = 'block';
        ref.current.style.left = e.clientX + 'px';
        ref.current.style.top = e.clientY + 'px';
    }

    const hideMenu = (e) => {
        const wasOutside = !(e.target.contains === ref);
        if (wasOutside && visible) {
            ref.current.style.display = 'none';
        };
    }

    const showId = () => {
        console.log(props.id)
    }
    
    return (
        <div className="container" onContextMenu={(e) => showContentMenu(e)} 
            onClick={(e) => hideMenu(e)}>
            {props.children}
            <div className="menu" ref={ref} onClick={() => showId()}>
            <ul className="context-items">
                <li className="context-item">Show ID</li>
            </ul>
            </div>
        </div>            
    )
}

export default ContextMenu;