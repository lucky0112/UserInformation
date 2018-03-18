import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Reducers from './Reducers';
import AlbumsContainer from './Components/Albums/AlbumsContainer'
import App from './Components/App';
import TopBar from './Components/TopBar';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise,thunk)(createStore);


ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={createStoreWithMiddleware(Reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            <BrowserRouter>
                <div>
                    <Route component ={TopBar}/>
                    <Switch>
                        <Route path="/albums/:id" component={AlbumsContainer}/>
                        <Route path="/" component={App}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>
    , document.getElementById('root')
);
registerServiceWorker();
