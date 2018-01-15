import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import PageButton from './pages/button.js';
import PageIntro from './pages/intro.js';
import PageDesign from './pages/design.js';
import PageLiveHint from './pages/livehint.js';
import PageMessageBox from './pages/messagebox.js';
import PageColor from './pages/color.js';
import PageIcon from './pages/icon.js'

export default class Container extends React.Component {
    static propTypes = {
        pageKey: PropTypes.string,
    }
    static defaultProps = {
        pageKey: '',
    }
    render() {
        switch (this.props.pageKey) {
            case 'button': return <PageButton />;
            case 'intro': return <PageIntro />;
            case 'design': return <PageDesign />;
            case 'livehint': return <PageLiveHint />;
            case 'messagebox': return <PageMessageBox />;
            case 'color': return <PageColor/>
            case 'icon': return <PageIcon />
            default: return <PageIntro/>;
        }
    }
}