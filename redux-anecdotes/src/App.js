import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store
  }

  vote = (anecdote) => () => {
    this.store.dispatch({
      type: 'VOTE',
      data: anecdote
    })
  }

  addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log(anecdote)
    this.store.dispatch({
      type: 'NEW',
      data: anecdote
    })
    event.target.anecdote.value = ''
  }

  render() {
    const anecdotes = this.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote(anecdote)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name="anecdote"/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default App