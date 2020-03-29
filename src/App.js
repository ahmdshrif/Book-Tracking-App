//*****************************************************************
import React from 'react'
import SearchPage from './components/SearchPage'
import HomeScreen from './components/HomeScreen'
import { BrowserRouter, Route } from "react-router-dom";
import './App.css'

//*****************************************************************
class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/search" component={SearchPage} />
      </BrowserRouter>
    )
  }
}

export default BooksApp
//*****************************************************************
