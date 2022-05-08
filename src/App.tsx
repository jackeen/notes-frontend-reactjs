import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/home';
import About from './pages/about';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header></Header>

            <Router>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                </Routes>
            </Router>

            <footer>x</footer>

        </div>
    );
}

export default App;
