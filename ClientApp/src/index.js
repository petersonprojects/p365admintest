import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './App';
import OneDrive from './components/OneDrive';
import SharePoint from './components/SharePoint';
import Exchange from './components/Exchange';
import Settings from './components/Settings';
import Teams from './components/Teams';
import Compliance from './components/Compliance';
import Services from './components/Services';
import Signout from './components/Signout';
import Labels from './components/Labels';
import Reports from './components/Reports';
import Setup from './components/Setup';
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

          <Route exact path='/' component={Services}/>

          <Route exact path='/Services' component={Services}/>
          <Route exact path='/Services/SharePoint' component={SharePoint}/>
          <Route exact path='/Services/OneDrive' component={OneDrive}/>
          <Route exact path='/Services/Exchange' component={Exchange}/>
          <Route exact path='/Services/Teams' component={Teams}/>

          <Route exact path='/Compliance' component={Compliance}/>
          <Route exact path='/Compliance/Labels' component={Labels}/>

          <Route exact path='/Reports' component={Reports}/>
          <Route exact path='/Settings' component={Settings}/>
          <Route exact path='/Setup' component={Setup}/>

          <Route exact path='/signout' component={Signout}/>

          <Route component={Services}/>

        </Switch>
      </BaseLayout>
    </Router>
    </Provider>,

  document.getElementById('root')

);
