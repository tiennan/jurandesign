import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Button, LiveHint} from '../hswui';
import { Card } from 'antd';

export default class PageLiveHint extends React.Component {
    constructor(props) {
        super(props);

    }
    onBtnClick() {
        LiveHint.show("Hello LiveHint! <a></a>", 3000, null, {
            status: "warning",
            canclose: true,
            append: "<span class='action'>Re-open</span>",
            effect: "shake"
        });
    }

    onBtnClick1() {
        LiveHint.show("Hello LiveHint! <a></a>", 6000, null, {
            status: "loading",
            canclose: true,
            append: "<span class='action'>Re-open</span>",
        });
    }

    onBtnClick2() {
        LiveHint.show("Hello LiveHint! <a></a>", 6000, null, {
            status: "warning",
            canclose: true,
            append: "<span class='action'>Re-open</span>",
        });
    }

    onBtnClick3() {
        LiveHint.show("Hello LiveHint! <a></a>", 6000, null, {
            status: "completed",
            canclose: true,
            append: "<span class='action'>Re-open</span>",
        });
    }

    onBtnClick4() {
        LiveHint.show("Hello LiveHint! <a></a>", 6000, null, {
            status: "canops",
            canclose: true,
            append: "<span class='action'>Re-open</span>",
        });
    }

    onBtnClick5() {
        LiveHint.show("Hello LiveHint! <a></a>", 6000, null, {
            status: "canops",
            canclose: true,
        });
    }

    onBtnClick6() {
        LiveHint.show("Hello LiveHint! <a></a>", 6000, null, {
            status: "canops",
            canclose: false,
        });
    }

    onBtnClick7() {
        LiveHint.show("Hello LiveHint! <a></a>", 6000, null, {
            status: "warning",
            canclose: true,
            effect: "shake",
        });
    }
    onBtnClick8() {
        LiveHint.show("Hello LiveHint! <a></a>", 3000, null, {
            status: "warning",
            canclose: true,
            append: "<span class='action'>Re-open</span>",
            effect: "shake"
        });
    }
    render() {
        return (
            <div>
                <h1>LiveHint 消息提示</h1>
                <p></p>
                <h2>用法</h2>
                <Card title="options" >
                    <h3>status</h3>
                    <Button onClick={this.onBtnClick1}>loading</Button>&nbsp;&nbsp;
                    <Button onClick={this.onBtnClick2}>warning</Button>&nbsp;&nbsp;
                    <Button onClick={this.onBtnClick3}>completed</Button>&nbsp;&nbsp;
                    <Button onClick={this.onBtnClick4}>canops</Button>&nbsp;&nbsp;
                    <br /><br />
                    <h3>canclose</h3>
                    <Button onClick={this.onBtnClick5}>true</Button>&nbsp;&nbsp;
                    <Button onClick={this.onBtnClick6}>false</Button>&nbsp;&nbsp;
                    <br /><br />
                    <h3>effect</h3>
                    <Button onClick={this.onBtnClick7}>shake</Button>&nbsp;&nbsp;
                    <br /><br />
                    <h3>append</h3>
                    <Button onClick={this.onBtnClick8}>appendtext</Button>&nbsp;&nbsp;
                    <br /><br />
                </Card>
                <br /><br />
                <Card title="API">
                <pre>
                    <code>
                        {`
LiveHint.show("Hello LiveHint! <a></a>", 3000, null, {
    status: "warning",
    canclose: true,
    append: "<span class='action'>Re-open</span>",
    effect: "shake"
});
                        `}
                    </code>
                </pre>
                </Card>

            </div>
        );
    }
}