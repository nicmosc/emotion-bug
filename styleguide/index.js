import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';


function render() {
  ReactDOM.render(<App />, document.querySelector('body'));
}


if (module.hot) {
  module.hot.accept(() => {
    render();
  });
}


render();
