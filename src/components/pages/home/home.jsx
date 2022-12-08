import React from "react";

import { Link } from "react-router-dom";

import { Title } from '../../title/title'
import { ItemList } from '../../itemList/itemList'
import style from './home.module.css'

export function Home({setUserName, user}) {

    return (
        <>
            <div className={style.signin}>
                {user ? <Link onClick={() => (setUserName(''))}> {user} | sign out </Link> : <Link to='auth'> sign in</Link>}
                
            </div>

            <Title/>
            <ItemList user={user}/>
        </>
    )
}