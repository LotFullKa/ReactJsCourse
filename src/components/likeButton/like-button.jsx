import React, { useState } from "react";
import style from './likeButton.module.css'
import likeImg from '../../assets/like.png'


export function LikeButton({ currentLikes }) {
    const [isLiked, setLike] = useState(false)

    const [buttonStyle, changeButtonStyle] = useState(style.unliked)

    const press = () => {
        setLike(oldVal => !oldVal)
        if (!isLiked) {
            console.log("liked style")
            changeButtonStyle(style.liked)
        } else {
            changeButtonStyle(style.unliked)
        }
    }



    return (
        <div onClick={press} className={style.likediv}>
            <img className={buttonStyle} src={likeImg} alt="like" />
            <div className={style.likeCount}> : {currentLikes + isLiked}</div>
        </div>
    )
}