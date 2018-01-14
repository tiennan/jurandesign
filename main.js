import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import MyMenu from './menu.js';
import MyContainer from './container.js';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageKey: 'default',
        };
        this.onSiderMenuClicked = this.onSiderMenuClicked.bind(this);
    }
    onSiderMenuClicked(data) {
        this.setState({
            pageKey: data.key,
        });
    }
    render() {
        return (
        <Layout>
            <Header className="header" style={{ background: '#fff' }}>
                <img className="logo" src="./res/logo.png" />
                <div className="title">Design Guideline</div>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <MyMenu handleClick={this.onSiderMenuClicked} />
                </Sider>
                <Layout>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        <MyContainer pageKey={this.state.pageKey} />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
        );
    }
}