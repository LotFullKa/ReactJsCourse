import React from "react";
import style from './card.module.css';

import {LikeButton} from '../likeButton/like-button'
import {CommentButton} from '../comment/commentButton/comment-button'
import { useState } from "react";
import { CommentField } from "../comment/commentField/comment-field";

export function Card(props) {

    const [isCommentFieldOpen, openField] = useState(false)

    return (
        <div className={style.wrapper}>
        <div className={style.card}>
            <h3>{props.title}</h3>
            <p> Depth: {props.depth}</p>
            <p className={style.text}>{props.text}</p>
            <div className={style.wrapper}>
            <LikeButton currentLikes={props.currentLikes}></LikeButton>
            <CommentButton filedOpenFunc={openField}/>
            </div>
        </div>
        <CommentField isOpen={isCommentFieldOpen}/>
        </div>
    )
}