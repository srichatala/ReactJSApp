import React from 'react';

import {Header} from "./header.jsx";

export default class Root extends React.Component{
    render(){
        return(
            <div className="Container"> 
                <div className="row">
                    <div className="col-xs-12">
                        <Header />
                    </div>
                </div>
                 <div className="row">
                    <div className="col-xs-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}