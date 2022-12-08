import React, { useState } from "react";
import commentImg from '../../../assets/comment.png'
import style from './comment-button.module.css'


export function CommentButton({fieldOpenFunc}) {
    const [isOpened, open] = useState(false)

    const [buttonStyle, changeButtonStyle] = useState(style.close)

    const press = () => {
        if (!isOpened) {
            console.log("open comments")
            changeButtonStyle(style.open)
        } else {
            console.log("close comments")
            changeButtonStyle(style.close)
        }
        
        open(oldVal => !oldVal)
        console.log("isOpened: ", isOpened)
        fieldOpenFunc(!isOpened)
    }


    return (
        <div onClick={press} className={style.imgdiv}>
        <img className={buttonStyle} src={commentImg} alt="comment" />
        </div>
    )
}