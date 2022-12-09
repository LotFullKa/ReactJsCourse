import './App.css';
import React, { useState } from 'react'

import { Route, Routes,  Navigate } from 'react-router-dom'
import {Authorization} from '../pages/authorization/authorization'
import {Home} from '../pages/home/home'

function App() {
  const [userName, setUserName] = useState('')

  return (
    <div className="App">
        
        <Routes>
            <Route exact path='/' element={<Home setUserName={setUserName} user={userName}/>}/>
            <Route path='auth/' element={<Authorization user_name={setUserName}/>}/>
            <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
  </div>
  );
}

export default App;
