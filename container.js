import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import PageButton from './pages/button.js';
import PageIntro from './pages/intro.js';
import PageDesign from './pages/design.js';

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
            default: return <PageIntro/>;
        }
    }
}