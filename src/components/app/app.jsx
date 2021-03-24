import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import PageHead from "../head/page-head";
import Left from "../left/left";
import Center from "../center/center";
import Right from "../right/right";

import '../../css/style.css';
// import 'bootstrap/dist/css/bootstrap.css'
import '../../css/app/app.css'



export default class App extends Component{

    render() {
        return(
            <div className="wpbox">
                <PageHead />
                <Left/>
                <div className="mrbox">
                    <Center/>
                    <Right/>
                </div>
            </div>
        )
    }
}