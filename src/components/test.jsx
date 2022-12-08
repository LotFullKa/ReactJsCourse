// Здесь приведен пример использования useEffect
// для реализации запроса после маунтинга по аналогии с componentDidMount

import React, {useState, useEffect} from 'react'

import {getComments} from '../utils/get-comments-by-article'

export function MyComponent() {
    const [data, setData] = useState(null)

    useEffect(() => {
        getComments().then(fetchedData => setData(fetchedData))
    }, [])

    return data
        ? <div> {data} </div>
        : <div> NO DATA </div>
}