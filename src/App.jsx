import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './home';
import Register from './register';
import Login from './login';
import Results from './results';
import Quiz from './quiz';
import { auth } from './assets/firebase/firebasecongfig';
import {Toaster} from 'react-hot-toast';

function App() {
  const [user, setUser] = useState(null);

 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });


    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Toaster />
      <Router>
        <Routes>

          <Route path='/' element={user ? <Navigate to="/home" /> : <Register />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/results' element={<Results/>} />
          <Route path='/quiz' element={<Quiz/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
