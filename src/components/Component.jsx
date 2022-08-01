import React from 'react';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';

// BEGIN (write your solution here)
export default class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = { log: [] }
    }

    change = (value) => {
        const { log } = this.state;
        const currentValue = get(log, [0, 'value'], 0) + value;
        const current = { id: uniqueId(), value: currentValue };
        this.setState({ log: [current, ...log] });
    }

    plus = () => this.change(+1)

    minus = () => this.change(-1)

    delete = (incomeId) => (e) => {
        e.preventDefault()
        this.setState(({ log }) => ({ log: log.filter(({ id }) => id !== incomeId) }))
    }

    render() {
        const { log } = this.state;

        const buttons = (
            <div className="btn-group font-monospace" role="group">
                <button type="button" className="btn btn-outline-success" onClick={this.plus}>+</button>
                <button type="button" className="btn btn-outline-danger" onClick={this.minus}>-</button>
            </div>
        )

        return (
            <div>
                {buttons}
                <div className="list-group">
                    {log.map(({ value, id }) => (
                        <button key={id} type="button" className="list-group-item list-group-item-action" onClick={this.delete(id)}>{value}</button>
                    ))}
                </div>
            </div>

        )
    }
}
// END
