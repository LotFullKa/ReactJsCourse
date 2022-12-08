import React from "react";

import { Link } from "react-router-dom";

import { Title } from '../../title/title'
import { ItemList } from '../../itemList/itemList'
import style from './home.module.css'

export function Home({auth_func}) {

    return (
        <>
            <div className={style.signin}>
                <Link to='auth'> sign in</Link>
            </div>

            <Title/>
            <ItemList/>
        </>
    )
}