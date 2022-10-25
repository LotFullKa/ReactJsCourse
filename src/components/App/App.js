import './App.css';
import data from '../assets/mock-data.json'
import { CardClass } from '../block/block';

function App() {
  return (
    <div className="App">
      <div className="App-header">Choose your favorite level in great Abyss
      <div className='Describe'>From manga "Made in Abyss"</div>
      </div>
      {data.map(item => <CardClass title={item.title} depth={item.depth} text={item.describe} base_likes={item.currentLikes}/>)}
    </div>
  );
}

export default App;
