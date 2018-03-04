import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ handleSubmit, handleChange, title, author, url }) => {

    return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type='text'
                name='title'
                value={title}
                onChange={handleChange}
            />
            <br />
            <label>Author:</label>
            <input type='text'
                name='author'
                value={author}
                onChange={handleChange}
            />
            <br />
            <label>Url:</label>
            <input type='text'
                name='url'
                value={url}
                onChange={handleChange}
            />
            <input type='submit' value='Lisää blogi' />
        </form>
    )
}

BlogForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default BlogForm