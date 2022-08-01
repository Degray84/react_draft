// @ts-check
/* eslint-disable react/static-property-placement */

import cn from 'classnames';
import React from 'react';

const Header = (props) => (
    <div className="modal-header">
        <div className="modal-title">{props.children}</div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.toggle}>
        </button>
    </div>
)
const Body = (props) => <div className="modal-body">{props.children}</div>
const Footer = (props) => (
    <div className="modal-footer">  {props.children}  </div>
)

// BEGIN (write your solution here)
export default class Modal extends React.Component {
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {
        const { isOpen, children } = this.props

        return (
            <div className={cn('modal', { 'fade show': isOpen })} style={{ display: isOpen ? 'block' : "none" }} role="dialog" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

// END
