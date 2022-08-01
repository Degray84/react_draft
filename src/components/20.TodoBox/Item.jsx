// @ts-check
/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */

import React from 'react';

// BEGIN (write your solution here)
export default class Item extends React.Component {
    render() {
        const { id, text, finished, handleClick } = this.props

        return (
            <div className="row">
                <div className="col-1">{id}</div>
                <div className="col">
                    {finished ? <s><a href="#" className="todo-task" onClick={handleClick(id)}>{text}</a></s> : <a href="#" className="todo-task" onClick={handleClick(id)}>{text}</a>}
                </div >
            </div >
        )
    }
}
// END
