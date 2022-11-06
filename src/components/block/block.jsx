import React from "react";
import style from './block.module.css';

import {LikeButton} from '../likeButton/likeButton'

export function Card(props) {

    return (
        <div className={style.card}>
            <h3>{props.title}</h3>
            <p> Depth: {props.depth}</p>
            <p className={style.text}>{props.text}</p>
            <LikeButton currentLikes={props.currentLikes}></LikeButton>
        </div>
    )
}