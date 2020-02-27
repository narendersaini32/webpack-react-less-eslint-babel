import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './components/home';
import './styling/index.less';

const wrapper = document.getElementById('app');
// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Home />, wrapper);
