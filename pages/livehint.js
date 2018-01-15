import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Button, LiveHint} from '../hswui';
import { Card, Table } from 'antd';

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
        const apiParamDoc = {
            columns: [{
                title: '参数',
                dataIndex: '0',
                key: '0',
            }, {
                title: '说明',
                dataIndex: '1',
                key: '1',
            }, {
                title: '类型',
                dataIndex: '2',
                key: '2',
            }, {
                title: '默认值',
                dataIndex: '3',
                key: '3',
            }],
            dataSource: [{
                key: 1,
                '0': 'message',
                '1': '展示文字',
                '2': 'string',
                '3': '-',
            }, {
                key: 2,
                '0': 'duration',
                '1': '展示时间(ms)',
                '2': 'number',
                '3': '-',
            }, {
                key: 3,
                '0': 'callback',
                '1': '关闭时调用',
                '2': 'function',
                '3': '-',
            }, {
                key: 4,
                '0': 'options',
                '1': '其他参数',
                '2': 'object',
                '3': '-',
            }],
        }
        return (
            <div>
                <h1>LiveHint 消息提示</h1>
                <p></p>
                <h2>用法</h2>
                <Card title="status" >
                    <Button onClick={this.onBtnClick1}>loading</Button>&nbsp;&nbsp;
                    <Button onClick={this.onBtnClick2}>warning</Button>&nbsp;&nbsp;
                    <Button onClick={this.onBtnClick3}>completed</Button>&nbsp;&nbsp;
                    <Button onClick={this.onBtnClick4}>canops</Button>&nbsp;&nbsp;
                </Card>
                <br /><br />
                <Card title="canclose" >
                    <Button onClick={this.onBtnClick5}>true</Button>&nbsp;&nbsp;
                    <Button onClick={this.onBtnClick6}>false</Button>&nbsp;&nbsp;
                </Card>
                <br /><br />
                <Card title="effect" >
                    <Button onClick={this.onBtnClick7}>shake</Button>&nbsp;&nbsp;
                </Card>
                <br /><br />
                <Card title="append" >
                    <Button onClick={this.onBtnClick8}>appendtext</Button>&nbsp;&nbsp;
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
                <br /><br />
                <Table dataSource={apiParamDoc.dataSource} columns={apiParamDoc.columns} pagination={false} />
                
            </div>
        );
    }
}