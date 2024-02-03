import React, {Component} from "react";
// @ts-ignore

import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="p-4 bg-[#444544] flex flex-wrap justify-between">
                <div className="flex">



                </div>

                <ul className="list-none mt-2 flex">
                    <li className="mr-2 text-[18px] text-[#e6f0e6] hover:text-green-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-2 text-[18px] text-[#e6f0e6] hover:text-green-500">
                        <Link to="/user">User</Link>
                    </li>


                </ul>

                <button className="text-[20px] text-[#e6f0e6] bg-green-400 pl-3 pr-3
                                   hover:text-gray-600 rounded-2xl"><Link to="/login">Log In</Link></button>






            </div>
        );
    }


}