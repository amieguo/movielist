import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList.js';
import Search from './Search.js';
import InputField from './InputField.js';
import movieData from "./movieData";
import Tabs from './Tabs';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
      search: [], 
      tabs: ["All", "Watched", "To Watch"]
      // watched: [],
      // towatch: []
    }
  }

  handleSearchInputChange(searchedMovie) {
    console.log(searchedMovie)
    var currentList = this.state.movies;
    var searchResults = currentList.filter((movie) => movie.title.toLowerCase().includes(searchedMovie.toLowerCase()));
    this.setState({
      search: searchResults
    })
  }

  handleUndo() {
    this.setState({
      search: this.state.movies
    })
  }

  handleSubmit(movie) {
    var movieList = this.state.movies;
    movieList.push({title: movie, watchStatus: "To Watch"})
    this.setState({
      movies: movieList,
      search: movieList
    })
    console.log("submit:", this.state.movies)
  }

  handleChangeWatchStatus(movie) {
    var oldList = this.state.movies;
    // var oldToWatch = this.state.towatch;
    // var newWatched = oldWatched.push(movie);/
    // var newToWatch = oldToWatch.filter((movie) => movie.title)
    for (var i = 0; i < oldList.length; i++) {
      if (oldList[i].title === movie.title) {
        oldList[i].watchStatus = "Watched";
      }
    }

    this.setState({
      movies: oldList
    })
    console.log('watchstatus:', this.state.movies)
  }

  handleSwitchTab = (tab) => {
    console.log("switchtab:", this.state)
    console.log("tab:", tab)
    var movieList = this.state.movies;
    var watchedList = movieList.filter(movie => movie.watchStatus==="Watched")
    var toWatchList = movieList.filter(movie => movie.watchStatus==="To Watch")
    if (tab === "All") {
      this.setState({
        search: movieList
      })
    } else if (tab === "Watched") {
      this.setState({
        search: watchedList
      })
    } else if (tab === "To Watch") {
      this.setState({
        search: toWatchList
      })
    }
  }


  render() {
    return (
      <div className="app">
        <h1 className="heading">My Movie List</h1>
        <div><InputField handleSubmit={this.handleSubmit.bind(this)}/></div>  
        <div><Search handleSearchInputChange={this.handleSearchInputChange.bind(this)} handleUndo={this.handleUndo.bind(this)}/></div>
        <div className="tabs"><Tabs tabs={this.state.tabs} handleSwitchTab={this.handleSwitchTab.bind(this)}/></div>
        <div className="movies"><MovieList movies={this.state.search} handleChangeWatchStatus={this.handleChangeWatchStatus.bind(this)}/></div>
     </div>
    )
  }
}


export default App;