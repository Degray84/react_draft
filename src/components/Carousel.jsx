import './Carousel.css'

import React from 'react';
import cn from 'classnames';
import uniqueId from 'lodash/uniqueId';

// BEGIN (write your solution here)
export default class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = { images: props.images.map((url, i) => ({ url, active: !i })) }
    }

    setActive = (next, array) => {
        const index = array.findIndex(({ active }) => active)

        let newArray
        if (next) {
            if (index + 1 === array.length) {
                newArray = array.map((image, i) => ({ ...image, active: !i }))
                return newArray
            } else {
                newArray = array.map((image, i) => ({ ...image, active: index + 1 === i ? true : false }))
                return newArray
            }
        } else {
            if (index === 0) {
                newArray = array.map((image, i) => ({ ...image, active: i === array.length - 1 }))
                return newArray
            } else {
                newArray = array.map((image, i) => ({ ...image, active: index - 1 === i ? true : false }))
                return newArray
            }
        }

    }

    prev = (e) => {
        e.preventDefault();
        this.setState({ images: this.setActive(false, this.state.images) });
    };

    next = (e) => {
        e.preventDefault();
        this.setState({ images: this.setActive(true, this.state.images) });
    };

    render() {
        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    {this.state.images.map(({ url, active }) => (
                        <div key={uniqueId()} className={cn('carousel-item', { 'active': active })}>
                            <img alt="" className="d-block w-100" src={url} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev" onClick={this.prev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" onClick={this.next}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div >
        )
    }
}
// END
