import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Button, MessageBox} from '../hswui';
import { Card, Table } from 'antd';

export default class PageMessageBox extends React.Component {
    constructor(props) {
        super(props);
    }
    onBtnClick() {
        var callback = function (clickedButtonIndex) {
            // @clickedButtonIndex, -1 = close
        };
        var msgBox = MessageBox.create("hello world !",["OK","Cancel"],0,{title:"test",disablemask:true});
        msgBox.show(callback);
    }

    render() {
        // msg,buttons,defaultbtnIndex,additional
        const apiParamDoc = {
            columns: [{
                key: 1,
                title: '参数',
                dataIndex: '0',
            }, {
                key: 2,
                title: '说明',
                dataIndex: '1',
            }, {
                key: 3,
                title: '类型',
                dataIndex: '2',
            }, {
                key: 4,
                title: '默认值',
                dataIndex: '3',
            }],
            dataSource: [{
                key: 1,
                '0': 'msg',
                '1': '展示文字',
                '2': 'string',
                '3': '-',
            }, {
                key: 2,
                '0': 'buttons',
                '1': '按钮',
                '2': 'array of string',
                '3': '-',
            }, {
                key: 3,
                '0': 'defaultbtnIndex',
                '1': '主要按钮的index',
                '2': 'number',
                '3': '-',
            }, {
                key: 4,
                '0': 'additional',
                '1': '{ title: "test", disablemask: true }',
                '2': 'object',
                '3': '-',
            }],
        }
        return (
            <div>
                <h1>MessageBox 弹框</h1>
                <p></p>
                <h2>用法</h2>
                <Card title="一般" >
                    <Button onClick={this.onBtnClick}>点我</Button>&nbsp;&nbsp;
                </Card>
                <br /><br />
                <Card title="API">
                <pre>
                    <code>
                        {`
var callback = function (clickedButtonIndex) {
    // @clickedButtonIndex, -1 = close
};
var msgBox = MessageBox.create("hello world !",["OK","Cancel"],0,{title:"test",disablemask:true});
msgBox.show(callback);
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