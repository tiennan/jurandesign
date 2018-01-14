import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    static propTypes = {
        pageKey: PropTypes.string,
    }
    static defaultProps = {
        pageKey: '',
    }
    render() {
        return <div>hello world Button</div>
    }
}