import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Sider extends React.Component {
    static propTypes = {
        handleClick: PropTypes.func,
    }
    static defaultProps = {
        handleClick: (e) => console.log('click ', e),
    }
    render() {
        return (
            <Menu
                onClick={this.props.handleClick}
                defaultSelectedKeys={['intro']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="ant-design" /><span>居然设计家</span></span>}>
                    <Menu.Item key="intro">介绍</Menu.Item>
                    <Menu.Item key="design">设计价值观</Menu.Item>
                    <Menu.Item key="1">色彩</Menu.Item>
                    <Menu.Item key="2">图标</Menu.Item>
                    <Menu.Item key="3">主要控件及样式</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>基本控件</span></span>}>
                    <Menu.Item key="button">Button 按钮</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>提示控件</span></span>}>
                    <Menu.Item key="livehint">LiveHint 消息提示</Menu.Item>
                    <Menu.Item key="messagebox">MessageBox 弹框</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}
