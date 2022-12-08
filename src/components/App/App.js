import './App.css';
import React, { useState } from 'react'

import { Route, Routes,  Navigate } from 'react-router-dom'
import {Authorization} from '../pages/authorization/authorization'
import {Home} from '../pages/home/home'

function App() {
  const [authorised, setAuthorised] = useState(false)

  return (
    <div className="App">
        
        <Routes>
            <Route exact path='/' element={<Home auth_func={setAuthorised}/>}/>
            <Route path='auth/' element={<Authorization auth_func={setAuthorised}/>}/>
            <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
  </div>
  );
}

export default App;
