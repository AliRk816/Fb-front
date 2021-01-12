import React from 'react';
import './Story.css';
import { Avatar } from '@material-ui/core';

export default function Story({image, profilsrc, title}) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="story">
            <Avatar className="story__avatar" src={profilsrc} />
            <h4>{title}</h4>
        </div>
    )
}
