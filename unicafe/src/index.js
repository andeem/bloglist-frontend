import React from 'react';
import ReactDOM from 'react-dom';
import counterReducer from './reducer'
import {createStore} from 'redux'

const Button = (props) => {
    return (
        <button onClick={props.func}>{props.teksti}</button>
    )
}

const Statistics = () => {
    if (store.getState().good + store.getState().bad + store.getState().ok < 1) {
        return (
            <div><p>ei yhtään palautetta annettu</p></div>
        )

    }
    return (
        <div>
            <h1>statistiikka</h1>
            <table>
                <tbody>
                    <Statistic name="hyvä" value={store.getState().good} />
                    <Statistic name="neutraali" value={store.getState().ok} />
                    <Statistic name="huono" value={store.getState().bad} />
                    <Statistic name="keskiarvo" value={(store.getState().good - store.getState().bad) / (store.getState().good + store.getState().bad + store.getState().ok)} />
                    <Statistic name="positiivisia" value={store.getState().good / (store.getState().good + store.getState().bad + store.getState().ok) * 100} unit="%" />
                </tbody>
            </table>
        </div>)
}

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.value} {props.unit}</td>
        </tr>
    )
}

const store = createStore(counterReducer)

class App extends React.Component {

    lisaaPalaute = (tyyppi) => {
        return () => {
            store.dispatch({type: tyyppi})
        }

    }

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <Button teksti="hyvä" func={this.lisaaPalaute("GOOD")} />
                <Button teksti="neutraali" func={this.lisaaPalaute("OK")} />
                <Button teksti="huono" func={this.lisaaPalaute("BAD")} />
                <Statistics app={this} />
            </div>
        )
    }
}

const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
}

render()
store.subscribe(render)