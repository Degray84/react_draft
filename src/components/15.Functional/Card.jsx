import React from 'react';

// BEGIN (write your solution here)
const Title = (props) => <div className="card-title">{props.children}</div>;
const Text = (props) => <div className="card-text">{props.children}</div>;
const Body = (props) => <div className="card-body">{props.children}</div>;
export default class Card extends React.Component {
    static Body = Body;
    static Title = Title;
    static Text = Text;

    render() {
        return <div className="card">{this.props.children}</div>;
    }
}
// END
