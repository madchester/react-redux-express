import React, { Component } from 'react';
import NavBar from './containers/NavBar';
import EventsContainer from './containers/EventsContainer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <EventsContainer />
        </div>
      </div>
    )
  }
}

export default App;
  