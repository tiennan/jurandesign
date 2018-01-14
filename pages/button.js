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
        return (
            <div>
                <h1>Button 按钮</h1>
                <p>常用的操作按钮。</p>
                <h2>用法</h2>
                
            </div>
        );
    }
}