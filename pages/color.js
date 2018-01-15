import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Color extends React.Component {
    static propTypes = {
        pageKey: PropTypes.string,
    }
    static defaultProps = {
        pageKey: '',
    }
    handleCopy(color){
       document.execCommand('copy');    
       alert(`${color}复制成功`);  
    }
    render() {
        return (
          <div className = "colorPage">
            <div className = "color-title">
            <h1>色彩</h1>
            <p>设计家将色彩体系解读成两个层面：基础色彩体系和控件色彩体系。
            基础色彩体系主要定义了设计家设计中的基础色板、中性色板和数据可视化色板。控件色彩体系则是在具体设计过程中，基于系统色彩进一步定义符合产品调性以及功能诉求的颜色。</p>
            </div>
            <div className ="color-palette">
                <div className="color-title">Sky Blue
                  <span className="color-description">活力、激情</span>
                </div>
                <div className="main-color">
                  <div className="main-color-item palatte-blue-1" title="click to copy color" onClick={this.handleCopy.bind(this,'#83c0ee')}>
                    <span className="main-color-text">Blue-1</span>
                    <span className="main-color-value">#83c0ee</span>
                  </div>
                  <div className="main-color-item palatte-blue-2" title="click to copy color" onClick={this.handleCopy.bind(this,'#55acee')}>
                    <span className="main-color-text">Blue-2</span>
                    <span className="main-color-value">#55acee</span>
                  </div>
                  <div className="main-color-item palatte-blue-3" title="click to copy color" onClick={this.handleCopy.bind(this,'#4d9bd6')}>
                    <span className="main-color-text">Blue-3</span>
                    <span className="main-color-value">#4d9bd6</span>
                  </div>
                  <div className="main-color-item palatte-blue-4" title="click to copy color">
                    <span className="main-color-text">Blue-4</span>
                    <span className="main-color-value">#36a1f0</span>
                  </div>
                  <div className="main-color-item palatte-blue-5" title="click to copy color">
                    <span className="main-color-text">Blue-5</span>
                    <span className="main-color-value">#3085c4</span>
                  </div>
                  <div className="main-color-item palatte-blue-6" title="click to copy color">
                    <span className="main-color-text">Blue-6</span>
                    <span className="main-color-value">#2e92de</span>
                  </div>
                </div>
              </div>
              <div className ="color-palette">
                <div className="color-title">Granny gray
                  <span className="color-description">斗志、奔放</span>
                </div>
                <div className="main-color">
                  <div className="main-color-item palatte-gray-1" title="click to copy color" >
                    <span className="main-color-text">gray-1</span>
                    <span className="main-color-value">#fafafa</span>
                  </div>
                  <div className="main-color-item palatte-gray-2" title="click to copy color" >
                    <span className="main-color-text">gray-2</span>
                    <span className="main-color-value">#f0f0f0</span>
                  </div>
                  <div className="main-color-item palatte-gray-3" title="click to copy color" >
                    <span className="main-color-text">gray-3</span>
                    <span className="main-color-value">#d9dbdf</span>
                  </div>
                  <div className="main-color-item palatte-gray-4" title="click to copy color">
                    <span className="main-color-text">gray-4</span>
                    <span className="main-color-value">#c3c4c8</span>
                  </div>
                  <div className="main-color-item palatte-gray-5" title="click to copy color">
                    <span className="main-color-text">gray-5</span>
                    <span className="main-color-value">#808080</span>
                  </div>
                  <div className="main-color-item palatte-gray-6" title="click to copy color">
                    <span className="main-color-text">gray-6</span>
                    <span className="main-color-value">#343a40</span>
                  </div>
                </div>
              </div>
          </div>
        );
    }
}