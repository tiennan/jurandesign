import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    static propTypes = {
        type: PropTypes.string,
    }
    static defaultProps = {
        type: 'default',
    }
    render() {
        let className = `hsw-btn btn-${this.props.type}`;
        
        return (
            <button className={className} onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}