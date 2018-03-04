import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import helpers from './utils/helpers'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import Notifcation from './components/Notification'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      blogs: [],
      username: '',
      password: '',
      url: '',
      title: '',
      author: '',
      message: ''
    }
  }

  onFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  blogFormOnSubmit = async (event) => {
    event.preventDefault()
    const { title, author, url } = this.state
    const blog = {
      title,
      author,
      url
    }
    try {
      const addedBlog = await blogService.addBlog(blog)
      this.setState({ message: `Lisättiin ${addedBlog.title} käyttäjältä ${addedBlog.author}` })
      setTimeout(() => {
        this.setState({ message: '' })
      }, 5000)
      this.setState({
        blogs: this.state.blogs.concat(addedBlog),
        url: '',
        author: '',
        title: ''
      })
      this.blogForm.toggleVisibility()
    } catch (exception) {
      this.setState({ message: `Blogin lisäys epäonnistui` })
      setTimeout(() => {
        this.setState({ message: '' })
      }, 5000)
    }
  }

  componentDidMount() {
    const userJSON = window.localStorage.getItem('user')
    if (userJSON) {
      this.setState({
        user: JSON.parse(userJSON)
      })
    }
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
  }

  login = async (event) => {
    event.preventDefault()
    const credentials = {
      username: this.state.username,
      password: this.state.password
    }

    try {
      const user = await loginService.login(credentials)
      console.log(user.token)
      blogService.setToken(user.token)
      this.setState({
        username: '',
        password: '',
        user
      })

      this.setState({ message: 'Kirjautuminen onnistui' })
      setTimeout(() => {
        this.setState({ message: '' })
      }, 5000)
      window.localStorage.setItem('user', JSON.stringify(user))
    } catch (exception) {
      this.setState({ message: 'Väärä käyttäjätunnus tai salasana' })
      setTimeout(() => {
        this.setState({ message: '' })
      }, 5000)
    }
  }

  logOut = () => {
    window.localStorage.removeItem('user')
  }

  render() {
    if (this.state.user === null) {
      return (
        <div>
          <Notifcation message={this.state.message} />
          <h1>Kirjaudu sisään</h1>
          <form onSubmit={this.login}>
            <label>Username:</label>
            <input type='text'
              name='username'
              value={this.state.username}
              onChange={this.onFieldChange}
            />
            <br />
            <label>Password:</label>
            <input type='password'
              name='password'
              value={this.state.password}
              onChange={this.onFieldChange}
            />
            <br />
            <input type='submit' value='Kirjaudu' />
          </form>
        </div>
      )
    }
    return (
      <div>
        <Notifcation message={this.state.message} />
        <h2>Kirjautuneena: {this.state.user.name}</h2>
        <form onSubmit={this.logOut}><input value="Kirjaudu ulos" type="submit" /></form>
        <Togglable buttonlabel="Lisää blogi" ref={component => this.blogForm = component}>
          <BlogForm
            handleSubmit={this.blogFormOnSubmit}
            handleChange={this.onFieldChange}
            title={this.state.title}
            author={this.state.author}
            url={this.state.url}
          />
        </Togglable>
        <h2>blogs</h2>
        {this.state.blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    );
  }
}

export default App;
