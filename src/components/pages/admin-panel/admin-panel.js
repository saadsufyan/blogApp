import React, { Component } from 'react';
import propTypes from 'prop-types';

export class AdminPanel extends Component {

    state = {
        title: '',
        content: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addBlog(this.state.title);
        this.setState({title: ''});
    }
    onChange = (e) => this.setState ({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type="text" 
                name="title" 
                placeholder="Add blog ..." 
                style = {{flex: 10, padding: '5px'}}
                value={this.state.title}
                onChange={this.onChange}
                />
                                
                <input 
                type="text" 
                name="content" 
                placeholder="Add Content here ..." 
                style = {{flex: 20, padding: '10px'}}
                value={this.state.content}
                onChange={this.onChange}
                />
                <input 
                type="submit" 
                value ="submit"
                className="btn" 
                style={{flex: 1}} />
            </form>
        )
    }
}

//proptypes
AddBlog.prototypes = {
    addBlog: propTypes.func.isRequired
}

export default AdminPanel