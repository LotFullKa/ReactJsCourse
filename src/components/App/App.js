import './App.css';
import React, {useState, useEffect} from 'react'
// import data from '../../data/article.json'
import { Card } from '../card/card';
import { getArticles } from '../../utils/get-article'

function App() {

  const [data, setData] = useState([])
  useEffect(() => {
    getArticles().then(fetchedData => setData(fetchedData))
  }, [])

  return (
    <div className="App">
        <div className="App-header">Choose your favorite level in great Abyss
            <div className='Describe'>From manga "Made in Abyss"</div>
        </div>
        {!data ? 
            (<div>Loading. . .</div>) : 
            (<div>{data.map((item, index) => <Card 
                                                key={index}
                                                cardId={item.articleId}
                                                title={item.title} 
                                                depth={item.depth} 
                                                text={item.describe} 
                                                currentLikes={item.currentLikes}
                                            />) 
                  } 
            </div> )}
  </div>
  );
}

export default App;
