import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
// import uuid from 'uuid';
import About from './components/pages/about';
import axios from 'axios';
import Login from './components/pages/Login/Login';

class App extends Component {

  state = {
    todos: []
  }


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res => this.setState({todos: res.data}))

  }
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      completed: false
    }).then (res => this.setState({ todos: [...this.state.todos, res.data]}));
  }
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
  }

  render() {
    return (
      <Router>
      <div>
        <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            {/* <AddTodo addTodo={this.addTodo} /> */}
            <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo} />
          </React.Fragment>
        )} />
        <Route exact path="/admin-panel/home" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo} />
          </React.Fragment>
        )} />
        <Route exact path="/admin-panel" component={Login} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
