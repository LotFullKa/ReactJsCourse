import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './authorization.module.css'
import {TryAuthorize} from '../../../utils/authorization.js'

export function Authorization({auth_func}) {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [messange, setMessange] = useState('')

    const navigate = useNavigate()

    const pressEnter = event => {
        if (event.keyCode === 13 && event.shiftKey === false) {
            event.preventDefault()
            signIn()
        }
    }

    const signIn = () => {
        const answer = TryAuthorize(name, password)
        if (answer === 'true') {
            auth_func(true)
            navigate("/sdadas")
        } else {
            setMessange(answer)
        }
    }

    return(
        <div className={style.logingCard}>
             { messange ? <div className={style.messange}> {messange} </div>  : ''} 
            <div>
                Логин:
                <input className={style.nameInput} 
                        value={name}
                        onChange={(event) => (setName(event.target.value))}
                        onKeyDown={pressEnter} />
            </div>
            <br/>
            <div>
                Пароль:
                <input className={style.nameInput}
                       value={password}
                       onChange={(event) => (setPassword(event.target.value))}
                       onKeyDown={pressEnter} />
            </div>
            <div className={style.signin}>
                <button className={style.button} onClick={signIn}> sign in</button>
            </div>

            <div className={style.back}>
                <button className={style.button} onClick={() => (navigate("/"))}> back </button>
            </div>
        </div>
    )
}