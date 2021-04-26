import React from 'react';
import css from './sourceComponent.module.css';
import cn from 'classnames';


function SourceComponent({data, color, size}){
    return(
        <div classname={cn(css[color], css[size])}>
        <p>{data.source}</p>
        <p>{data.lastupdated}</p>
        </div>
    );

}

export default SourceComponent;

