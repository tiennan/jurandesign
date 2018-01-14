import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Button} from '../hswui';

export default class PageButton extends React.Component {
    render() {
        return (
            <div>
                <h1>Button 按钮</h1>
                <p>常用的操作按钮。</p>
                <h2>用法</h2>
                <Button type="primary">关键操作</Button>&nbsp;&nbsp;
                <Button>辅助操作</Button>&nbsp;&nbsp;
                <pre>
                    <code>
                        {`
<Button type="primary">关键操作</Button>
<Button>辅助操作</Button>
                        `}
                    </code>
                </pre>
            </div>
        );
    }
}