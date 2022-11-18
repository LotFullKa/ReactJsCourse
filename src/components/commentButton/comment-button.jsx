import React, { useState } from "react";
import commentImg from '../../assets/comment.png'
import style from './comment-button.module.css'


export function CommentButton(props) {
    const [isOpened, open] = useState(false)

    const [buttonStyle, changeButtonStyle] = useState(style.close)

    const press = () => {
        open(oldVal=> !oldVal)
        if (!isOpened) {
            console.log("open comments")
            changeButtonStyle(style.open)
        } else {
            console.log("close comments")
            changeButtonStyle(style.close)
        }
    }


    return (
        <div onClick={press} className={style.imgdiv}>
        <img className={buttonStyle} src={commentImg} alt="comment" />
        </div>
    )
}