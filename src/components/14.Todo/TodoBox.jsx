import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '', items: [] }
    }

    handleRemove = (removeId) => (e) => {
        e.preventDefault();
        const newItems = this.state.items.filter(({ id }) => id !== removeId);
        this.setState({ items: newItems });
    };

    handleAdd = (e) => {
        e.preventDefault();
        const { value } = this.state;
        const newItems = [{ id: uniqueId(), value }, ...this.state.items]
        this.setState({ items: newItems, value: '' });
    };

    setValue = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        const { items, value } = this.state;

        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex">
                        <div className="me-3">
                            <input type="text" value={value} required="" className="form-control" placeholder="I am going..." onChange={this.setValue} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleAdd}>add</button>
                    </form>
                </div>
                {items.map((task) => (
                    <Item key={task.id} task={task} onRemove={this.handleRemove} />
                ))}

            </div>

        )
    }
}
// END
