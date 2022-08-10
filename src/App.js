
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
// import NewsItem from './components/NewsItem';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({ progress: progress})
  }

  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}  /*do not put direct progress cause its a state's object property*/
      />
      <div className='container'>
      <Routes>
      <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={10} category="general" country="in" />}/>
      <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={10} category="business" country="in" />}/>
      <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={10} category="entertainment" country="in" />}/>
      <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={10} category="sports" country="in" />}/>
      <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={10} category="health" country="in" />}/>
      <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={10} category="science" country="in" />}/>
      <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={10} category="technology" country="in" />}/>
      </Routes>
      </div>
      </BrowserRouter>
      </>
    )
  }
}

