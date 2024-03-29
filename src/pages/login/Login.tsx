import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Login extends Component {
    render() {
        return (
            <div className={"flex flex-wrap h-screen justify-center items-center bg-cover bg-center bg-no-repeat"}
                 style={{backgroundImage: 'url("/cus-reg.png")'}}>
                <div className={"h-auto mt-4 mb-4 pl-9 mx-auto border-white border-[0.5] rounded-2xl bg-gray-600 bg-opacity-70"}>
                    <h2 className={"pt-2 pb-2 text-3xl underline decoration-2 text-white mb-9 "}>LogIn</h2>
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
                            <label className="text-[10px] pr-2 font-bold text-white">Phone Number: </label>
                            <input className="float-right border-[1px] border-green-200" type={"number"}/>
                        </div>


                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">Password: </label>
                            <input className="float-right border-[1px] border-green-200" type={"password"}/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">User Name: </label>
                            <input className="float-right border-[1px] border-green-200" type={""}/>
                        </div>


                        <div className={"mt-2"}>
                            <button className="mt-2 w-full bg-Secondary text-[15px] p-[6px] rounded-3xl hover:text-white"><Link to="/">Back</Link></button>
                        </div>



                    </form>
                </div>

            </div>
        );
    }
}