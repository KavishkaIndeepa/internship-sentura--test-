import React, {Component} from "react";
import {Link} from "react-router-dom";

export class User extends Component {
    render() {
        return (
            <div className={"flex flex-wrap h-screen justify-center items-center bg-cover bg-center bg-no-repeat"}
                 style={{backgroundImage: 'url("/cus-reg.png")'}}>
                <div className={"h-auto mt-4 mb-4 pl-9 mx-auto border-white border-[0.5] rounded-2xl bg-gray-600 bg-opacity-70"}>
                    <h2 className={"pt-2 pb-2 text-3xl underline decoration-2 text-white mb-9 "}>User Register</h2>
                    <form className={"font-serif h-auto p-2 justify-center mr-10 "}>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">UserId: </label>
                            <input className="float-right border-[1px] border-green-200" type={""}/>
                        </div>


                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">E-Mail: </label>
                            <input className="float-right border-[1px] border-green-200" type={"email"}/>
                        </div>



                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">Middle Name: </label>
                            <input className="float-right border-[1px] border-green-200" type={""}/>
                        </div>



                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">Name: </label>
                            <input className="float-right border-[1px] border-green-200" type={""}/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">Family Name: </label>
                            <input className="float-right border-[1px] border-green-200" type={""}/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">Nick Name: </label>
                            <input className="float-right border-[1px] border-green-200" type={""}/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">Phone Number: </label>
                            <input className="float-right border-[1px] border-green-200" type={"number"}/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">comment: </label>
                            <input className="float-right border-[1px] border-green-200" type={""}/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">Image: </label>
                            <input className="float-right border-[1px] border-green-200" type={"image"}/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">Directory: </label>
                            <input className="float-right border-[1px] border-green-200" type={""}/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">Password: </label>
                            <input className="float-right border-[1px] border-green-200" type={"password"}/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">User Name: </label>
                            <input className="float-right border-[1px] border-green-200" type={""}/>
                        </div>

                        <div className={"m-5"}>

                            <button className="text-[20px] text-[#e6f0e6] bg-blue-600 pl-3 pr-3
                                   hover:text-gray-600 rounded-2xl mr-2">Add User</button>

                            <button className="text-[20px] text-[#e6f0e6] bg-blue-600 pl-3 pr-3
                                   hover:text-gray-600 rounded-2xl mr-2">Update User</button>

                            <button className="text-[20px] text-[#e6f0e6] bg-blue-600 pl-3 pr-3
                                   hover:text-gray-600 rounded-2xl">Delete User</button>
                        </div>





                    </form>
                </div>

            </div>
        );
    }
}