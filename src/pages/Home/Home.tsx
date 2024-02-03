import {Component} from "react";

export class Home extends Component {
    render() {
        return (
            <div className="flex justify-center items-center min-h-screen" style={{ backgroundImage: 'url("/cus-reg.png")' }}>
                <div className="w-full overflow-x-auto">
                    <table className="w-full divide-y divide-gray-600">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">User Id</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Name</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">E-mail</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Phone Number</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Password</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}