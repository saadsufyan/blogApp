import React, { Component } from 'react';
import propTypes from 'prop-types';

export class BlogItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.blog.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.blog;
        return (
            <div style={this.getStyle()}> 
                <h1>
                {title}
                </h1>
            </div>
        )
    }
}

//proptypes
blogItem.prototypes = {
    blog: propTypes.object.isRequired
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

export default BlogItem