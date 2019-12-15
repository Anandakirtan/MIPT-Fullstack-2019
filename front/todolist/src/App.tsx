import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ToDoBoard from './components/ToDoBoard/ToDoBoard'
import Registration from './components/Authorization/Registration'
import Authorization from './components/Authorization/Authorization'

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/auth" component={Authorization}/>
      <Route path="/registration" component={Registration}/>
      <Route path="/" exact component={ToDoBoard}/>
    </Router>
  );
}

export default App;
