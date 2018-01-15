import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Icon extends React.Component {
    static propTypes = {
        pageKey: PropTypes.string,
    }
    static defaultProps = {
        pageKey: '',
    }
    showCode(value){
        alert(`<span>${value}<span>`);
    }
    render() {
        return (
            <div className="iconsPage">
                <h1>图标</h1>
                <h3>1.catalog入口图标</h3>
                <ul className="anticons-list clearfix icons">
                  <li className="" onClick={this.showCode.bind(this, "yangbanjian")}><div className="yangbanjian"></div><span className="anticon-class"><span className="ant-badge">styler-icon</span></span></li>
                  <li className="" onClick={this.showCode.bind(this, "taocan")}><div className="taocan"></div><span className="anticon-class"><span className="ant-badge">taocan</span></span></li>
                  <li className="" onClick={this.showCode.bind(this, "jiaju")}><div className="jiaju"></div><span className="anticon-class"><span className="ant-badge">jiaju</span></span></li>
                  <li className="" onClick={this.showCode.bind(this, "yonghu")}><div className="yonghu"></div><span className="anticon-class"><span className="ant-badge">yonghu</span></span></li>
                  <li className="" onClick={this.showCode.bind(this, "zuijinshiyong")}><div className="zuijinshiyong"></div><span className="anticon-class"><span className="ant-badge">zuijinshiyong</span></span></li>
                </ul>
                {/* <h3>2.功能工具图标</h3>
                <ul className="anticons-list clearfix icons">
                  <li className=""><i className="anticon anticon-step-backward"></i><span className="anticon-class"><span className="ant-badge">step-backward</span></span></li>
                  <li className=""><i className="anticon anticon-step-forward"></i><span className="anticon-class"><span className="ant-badge">step-forward</span></span></li>
                  <li className=""><i className="anticon anticon-fast-backward"></i><span className="anticon-class"><span className="ant-badge">fast-backward</span></span></li>
                  <li className=""><i className="anticon anticon-fast-forward"></i><span className="anticon-class"><span className="ant-badge">fast-forward</span></span></li>
                  <li className=""><i className="anticon anticon-shrink"></i><span className="anticon-class"><span className="ant-badge">shrink</span></span></li>
                </ul>
                <h3>3.右键菜单</h3>
                <ul className="anticons-list clearfix icons">
                  <li className=""><i className="anticon anticon-step-backward"></i><span className="anticon-class"><span className="ant-badge">step-backward</span></span></li>
                  <li className=""><i className="anticon anticon-step-forward"></i><span className="anticon-class"><span className="ant-badge">step-forward</span></span></li>
                  <li className=""><i className="anticon anticon-fast-backward"></i><span className="anticon-class"><span className="ant-badge">fast-backward</span></span></li>
                  <li className=""><i className="anticon anticon-fast-forward"></i><span className="anticon-class"><span className="ant-badge">fast-forward</span></span></li>
                  <li className=""><i className="anticon anticon-shrink"></i><span className="anticon-class"><span className="ant-badge">shrink</span></span></li>
                </ul>
                <h3>4.辅助图标</h3>
                <ul className="anticons-list clearfix icons">
                  <li className=""><i className="anticon anticon-step-backward"></i><span className="anticon-class"><span className="ant-badge">step-backward</span></span></li>
                  <li className=""><i className="anticon anticon-step-forward"></i><span className="anticon-class"><span className="ant-badge">step-forward</span></span></li>
                  <li className=""><i className="anticon anticon-fast-backward"></i><span className="anticon-class"><span className="ant-badge">fast-backward</span></span></li>
                  <li className=""><i className="anticon anticon-fast-forward"></i><span className="anticon-class"><span className="ant-badge">fast-forward</span></span></li>
                  <li className=""><i className="anticon anticon-shrink"></i><span className="anticon-class"><span className="ant-badge">shrink</span></span></li>
                </ul> */}
            </div>
        );
    }
}