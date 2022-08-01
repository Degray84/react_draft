// @ts-check

import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { items: [], text: '' }
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(({ items }) => ({ items: [...items, { text: this.state.text, id: Number(new Date()), state: 'active' }] }))
    }

    handleActive = (uid) => (e) => {
        e.preventDefault()
        console.log(uid)
        const index = this.state.items.findIndex(({ id }) => id === uid)
        const items = update(this.state.items, { [index]: { $merge: { state: 'finished' } } })
        this.setState({ items })
    }

    handleFinish = (uid) => (e) => {
        e.preventDefault()
        console.log(uid)
        const index = this.state.items.findIndex(({ id }) => id === uid)
        const items = update(this.state.items, { [index]: { $merge: { state: 'active' } } })
        this.setState({ items })
      }

    render() {
        const { text, items } = this.state

        const active = items.filter(({ state }) => state === 'active')
        const finished = items.filter(({ state }) => state === 'finished')

        return (
            <div>
                <div className="mb-3">
                    <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
                        <div className="d-flex col-md-3">
                            <input type="text" value={text} required className="form-control me-3" placeholder="I am going..." onChange={this.handleChange} />
                            <button type="submit" className="btn btn-primary">add</button>
                        </div>
                    </form>
                </div>
                {!!active.length && (
                    <div className="todo-active-tasks">
                        {active.map(({ id, text }) => <Item key={id} id={id} text={text} handleClick={this.handleActive} />)}
                    </div>
                )}
                {!!finished.length && (
                    <div className="todo-finished-tasks">
                        {finished.map(({ id, text }) => <Item key={id} id={id} text={text} finished handleClick={this.handleFinish}/>)}
                    </div>
                )}

            </div>
        )
    }
}
// END
