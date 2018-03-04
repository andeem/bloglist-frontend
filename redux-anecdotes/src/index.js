import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import anecdoteReducer from './reducer'

const anecdoteStore = createStore(anecdoteReducer)

const render = () => {
  ReactDOM.render(
    <App store={anecdoteStore} />,
    document.getElementById('root')
  )
}

render()
anecdoteStore.subscribe(render)