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
        let className = `hsw-btn hsw-${this.props.type}`;
        
        return (
            <button className={className}>{this.props.children}</button>
        );
    }
}