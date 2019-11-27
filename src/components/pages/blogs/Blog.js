import React, {Component} from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types'

class Blog extends Component {
  
    render() {
    return this.props.blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} 
        delBlog={this.props.delBlog} />
    ));
  }
}

//proptypes
Blogs.prototypes = {
    blogs: propTypes.array.isRequired
}

export default Blog
