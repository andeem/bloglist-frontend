import React from 'react'
class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }
  render() {
    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    return(
      <div>
      <div onClick={this.toggleVisibility} style={hideWhenVisible}>
          {this.props.blog.title} {this.props.blog.author}
      </div>
      <div onClick={this.toggleVisibility} style={showWhenVisible}>
        {this.props.blog.title} {this.props.blog.author}
        <div>
          {this.props.blog.urls}
        </div>
        <div>
          {this.props.blog.likes} likes
        </div>
        <div>
          added by {this.props.blog.user.name}
        </div>
      </div>

  </div>
    )
  }
}

  export default Blog