import React, {useState, useEffect} from "react";

import { getArticles } from '../../utils/get-article'

import { Card } from '../card/card';

export function ItemList({user}) {

    const [data, setData] = useState([])
  useEffect(() => {
    getArticles().then(fetchedData => setData(fetchedData))
  }, [])


    return (
        <>
        {!data ? 
            (<div>Loading. . .</div>) : 
            (<div>{data.map((item, index) => <Card 
                                                user={user}
                                                key={index}
                                                cardId={item.articleId}
                                                title={item.title} 
                                                depth={item.depth} 
                                                text={item.describe} 
                                                currentLikes={item.currentLikes}
                                            />) 
                  } 
            </div> )}
        </>
    )
}