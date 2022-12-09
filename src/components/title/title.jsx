import React from "react";

import style from './title.module.css'

export function Title() {
    return (
        <div className={style.AppHeader}>Choose your favorite level in great Abyss
            <div className={style.Describe}>From manga "Made in Abyss"</div>
        </div>
    )
}

