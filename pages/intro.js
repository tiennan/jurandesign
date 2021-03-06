import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Intro extends React.Component {
    render() {
        return (
            <div>
                <h1>介绍</h1>
                <img style={{height: 350}} src="./res/fb.png" />
                <br /><br /><br />
                <p>居然设计家产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。</p>
                <p>随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系 Juran Design。基于『确定』，『自然』，『有序』和『无痕』的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于更好的用户体验。</p>
            </div>
        );
    }
}