import React from 'react';
import ReactDOM from 'react-dom';
import Home from './App';
import Projects from './components/Projects';
import Product from './components/Product';
import Members from './components/Members';
import Settings from './components/Settings';
import SettingsAdvanced from './components/SettingsAdvanced';
import Admins from './components/Admins';
import About from './components/About';
import Signout from './components/Signout';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers/reducer.js';
import { Provider } from 'react-redux';
// import reducer from './reducers/reducer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';

// local storage
// let saveToLocalStore = (state) => {

//   try{
//     const serializeState = JSON.stringify(state);
//     localStorage.setItem('state', serializeState)
//   }
//   catch(e){
//     console.log(e)
//   }

// }

// let loadFromLocalStore = () => {

//   const serializeState = localStorage.getItem('state');

//   if(serializeState == null)
//   {
//     return undefined;
//   }
//   else{
//     return JSON.parse(serializeState);
//   }

// }

// const persistedState = loadFromLocalStore();


let store = createStore(reducer,  compose(applyMiddleware(reduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// this happens every time theres an update to the local store
// store.subscribe(()=>{

//   store.getState();

// })

ReactDOM.render(

  <Provider store={store}>
    <Router>
      <BaseLayout>
        <Switch>

          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/about/projects' component={Projects}/>
          <Route exact path='/about/members' component={Members}/>
          <Route exact path='/about/product' component={Product}/>
          <Route exact path='/settings' component={Settings}/>
          <Route exact path='/settings/advanced' component={SettingsAdvanced}/>
          <Route exact path='/settings/admins' component={Admins}/>
          <Route exact path='/signout' component={Signout}/>
          <Route component={Home}/>

        </Switch>
      </BaseLayout>
    </Router>
    </Provider>,

  document.getElementById('root')

);
