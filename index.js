import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import Main from './main.js';
import './index.less';

function App() {
  return (
    <div style={{ margin: '0px 100px' }}>
      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
