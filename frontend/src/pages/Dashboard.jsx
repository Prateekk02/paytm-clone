import { useEffect, useState } from "react";

import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
 

   

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <div className="flex justify-center">
                <div className="mt-4 font-bold text-3xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    Welcome
                </div>

                </div>
                <Balance value={"10,000"} />
                <Users />
                
            </div>
        </div>
    );
};
