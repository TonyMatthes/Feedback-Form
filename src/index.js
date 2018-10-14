import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackForm = (state = {}, action) => {
    switch (action.type) {
        case 'FEELING':
            return { ...state, feeling: action.payload };
        case 'UNDERSTANDING':
            return { ...state, understanding: action.payload };
        case 'SUPPORTED':
            return { ...state, supported: action.payload };
        case 'COMMENTS':
            return { ...state, comments: action.payload };
        case 'RESET':
            return {};
        default:
            return state;
    }
}

const store = createStore(
    feedbackForm,
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
