import React from 'react';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import IndexPage from './pages';
import Docs from './pages/docs';
import Demo1 from './pages/demo1';
import Demo2 from './pages/demo2';
import './app.less'

function App() {
  return (
    <HashRouter>
        <div className='app'>
            <IndexPage/>
            <div className='demo_container'>
                <Switch>
                    <Route exact path="/docs" component={Docs}/>
                    <Route exact path="/demo1" component={Demo1}/>
                    <Route exact path="/demo2" component={Demo2}/>
                    <Redirect from="/" to="/docs" />
                </Switch>
            </div>
        </div>
    </HashRouter>
  );
}

export default App;
