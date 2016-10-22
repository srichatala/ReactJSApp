import React from 'react';
import ReactDOM from 'react-dom'
import {Router, Route, Link, browserHistory, IndexRouter} from 'react-router';

import {Root} from './components/root.jsx';
import {User} from './components/user.jsx';
import {Home} from './components/home.jsx';


class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRouter component={Home} />
                    <Route path={"user"} component={User} />
                    <Route path={"home"} component={Home} />
                </Route>          
            </Router>
        );
    }
}


class App1 extends React.Component{
    render(){
        return(
           <h1> welcome </h1>
        );
    }
}
ReactDOM.render(<App1 />,window.document.getElementById("app1"));