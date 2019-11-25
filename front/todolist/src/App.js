import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import FolderList from './components/FolderList'
import TaskList from './components/TaskList'


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <div id="content_wrapper">
          <div id="side_bar">
            <FolderList />
          </div>
          <div id="main_body">
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
