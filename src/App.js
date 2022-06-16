import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ArticleListPage from "./pages/ArticleListPage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import Navbar from "./Navbar";
import Projectlist from './pages/Projectlist';
import NotFoundPage from "./pages/NotFoundPage";
import { BsLinkedin,BsGithub, BsFolder } from 'react-icons/bs';


function App() {
        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <div id="page-body">
                    <Routes >
                            <Route exact path="/" element={<Homepage />}  />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/Article-List" element={<ArticleListPage />} />
                            <Route path="/Article/:name" element={<ArticlePage />} />
                            <Route path="/Project-list" element={<Projectlist />} />
                            <Route path='*'  element={<NotFoundPage />} />
                    </Routes>
                    </div>
                </Router>
                <div className="footerbotton">
                    <footer>
                        <h3 id="caption">Stay in touch</h3>
                        <div id="links">
                        <a href="https://www.linkedin.com/in/gagandeep-singh-0791771a1/" target="_blank" rel="noopener"> <BsLinkedin size={30} /></a>
                        <a href="https://github.com/Gagandeep1051" target="_blank" rel="noopener"> <BsGithub size={30} /></a>
                        </div>
                    </footer>
                </div>
            </div>
        );

}

export default App;
