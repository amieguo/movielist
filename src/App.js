import React from 'react';
import './App.css';
import MovieList from './MovieList.js';
import Search from './Search.js';
import InputField from './InputField.js';
// import movieData from "./movieData";
import Tabs from './Tabs';
import searchIMDB from './searchIMDB';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
      show: [], 
      tabs: ["All", "Watched", "To Watch"]
    }
  }

  handleSearchInputChange(searchedMovie) {
    console.log(searchedMovie)
    var currentList = this.state.movies;
    var searchResults = currentList.filter((movie) => movie.title.toLowerCase().includes(searchedMovie.toLowerCase()));
    this.setState({
      show: searchResults
    })
  }

  handleUndo() {
    this.setState({
      show: this.state.movies
    })
  }

  handleSubmit(movie) {
    var movieList = this.state.movies;
    movieList.push({title: movie, watchStatus: "To Watch"})
    this.setState({
      movies: movieList,
      show: movieList
    })
  }

  handleChangeWatchStatus(movie) {
    var List = this.state.movies;

    for (var i = 0; i < List.length; i++) {
      if (List[i].title === movie.title) {
        List[i].watchStatus = "Watched";
      }
    }

    this.setState({
      movies: List,
      show: List
    })
  }

  handleSwitchTab = (tab) => {
    var movieList = this.state.movies;
    var watchedList = movieList.filter(movie => movie.watchStatus==="Watched")
    var toWatchList = movieList.filter(movie => movie.watchStatus==="To Watch")
    if (tab === "All") {
      this.setState({
        show: movieList
      })
    } else if (tab === "Watched") {
      this.setState({
        show: watchedList
      })
    } else if (tab === "To Watch") {
      this.setState({
        show: toWatchList
      })
    }
  }

  getMovieInfo = (movie) => {
    searchIMDB(movie, (data) => {
      return(
        <div>
          <div>data.results[0].release_date</div>
          <div>data.results[0].vote_average</div>
      </div>
      )
    });
  }


  render() {
    return (
      <div className="app">
        <h1 className="heading">My Movie List</h1>
        <div><InputField handleSubmit={this.handleSubmit.bind(this)}/></div>  
        <div><Search handleSearchInputChange={this.handleSearchInputChange.bind(this)} handleUndo={this.handleUndo.bind(this)}/></div>
        <div className="tabs"><Tabs tabs={this.state.tabs} handleSwitchTab={this.handleSwitchTab.bind(this)}/></div>
        <div className="movies"><MovieList movies={this.state.show} handleChangeWatchStatus={this.handleChangeWatchStatus.bind(this)} getMovieInfo={this.getMovieInfo.bind(this)}/></div>
     </div>
    )
  }
}


export default App;