import React from "react";
import style from './card.module.css';

import {LikeButton} from '../likeButton/like-button'
import {CommentButton} from '../comment/commentButton/comment-button'
import { useState } from "react";
import { CommentField } from "../comment/commentField/comment-field";

export function Card({cardId, title, depth, text, currentLikes}) {

    const [isCommentFieldOpen, openField] = useState(false)

    return (
        <div className={style.wrapper}>
        <div className={style.card}>
            <h3>{title}</h3>
            <p> Depth: {depth}</p>
            <p className={style.text}>{text}</p>
            <div className={style.wrapper}>
            <LikeButton currentLikes={currentLikes}></LikeButton>
            <CommentButton filedOpenFunc={openField}/>
            </div>
        </div>
        <CommentField isOpen={isCommentFieldOpen} cardId={cardId}/>
        </div>
    )
}