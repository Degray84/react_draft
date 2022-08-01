// @ts-check
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

// BEGIN (write your solution here)
export default class Item extends React.Component {
    render() {
        const { task, onRemove } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm" onClick={onRemove(task.id)}>-</button>
                    </div>
                    <div className="col">{task.value}</div>
                </div>
                <hr />
            </div>
        )
    }
}
// END
