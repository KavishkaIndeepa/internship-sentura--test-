import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";


export class Main extends Component {
    render() {
        return (
            <div className="mx-auto">
                {/*<h1 className="text-4xl text-align text-primary">This is main Content</h1>*/}

                <Routes>
                    <Route path="/" Component={Home}></Route>

                </Routes>
            </div>
        );
    }
}