import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n';
import { worker } from './mocks/browser';

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
if (process.env.REACT_APP_MOCK_API === 'true') {
  worker.start({ onUnhandledRequest: 'bypass' }).then(renderApp);
} else {
  renderApp();
}
