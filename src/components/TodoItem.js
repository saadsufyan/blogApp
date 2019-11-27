import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withRouter, BrowserRouter as Router, Route} from 'react-router-dom';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            display : 'flex',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title, body} = this.props.todo;
        return (
            
            
                <div className="col-12" style={this.getStyle()}> 
                    {/* <p>
                    <input type="checkbox" onChange={() => this.props.markComplete(id)} /> { ' ' }
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                    </p> */}

                    <div className="row">
                        <div className="col-8">
                            <h1>
                            {title}        
                            </h1> 
                            <p>{body}</p>
                        </div>
                        <div className="col-3">
                            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                            <Route exact path="/details"/>
                            
                        </div>
                    </div>
                </div>
           
        )
    }
}

const Button = withRouter(({ history }) => (
    <button
      type='button'
      onClick={() => { history.push('/new-location') }}
    >
      Click Me!
    </button>
  ))
//proptypes
TodoItem.prototypes = {
    todo: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem