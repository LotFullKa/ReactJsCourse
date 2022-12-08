import React from "react";

import { Link } from "react-router-dom";

import { Title } from '../../title/title'
import { ItemList } from '../../itemList/itemList'
import style from './home.module.css'
import { UnAuthorize } from "../../../utils/authorization";

export function Home({setUserName, user}) {

    const signOut = () => {
        UnAuthorize(user)
        setUserName('')
    }
    
    return (
        <>
            <div className={style.signin}>
                {user ? <Link onClick={signOut}> {user} | sign out </Link> : <Link to='auth'> sign in</Link>}
                
            </div>

            <Title/>
            <ItemList user={user}/>
        </>
    )
}