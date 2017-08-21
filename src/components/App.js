import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../App.css';
import BookList from './book-list.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <BookList />
      </div>
    );
  }
}

const mapStateToProps=state=>{
    console.log('state',state);
    return{

    }
}

export default connect(mapStateToProps,null)(App);
