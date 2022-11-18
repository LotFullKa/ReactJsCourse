import './App.css';
import data from '../../assets/mock-data.json'
import { Card } from '../card/card';

function App() {
  return (
    <div className="App">
        <div className="App-header">Choose your favorite level in great Abyss
            <div className='Describe'>From manga "Made in Abyss"</div>
        </div>
        {data.map(item => <Card 
            title={item.title} 
            depth={item.depth} 
            text={item.describe} 
            currentLikes={item.currentLikes}
        />)}
    </div>
  );
}

export default App;
