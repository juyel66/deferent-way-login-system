import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import Home from "../Home/Home";


const Root = () => {
    return (
        <div>

            <div className="lg:w-[1200px] w-full mx-auto">
                <Navbar></Navbar>
            </div>
            {/* <Outlet></Outlet> */}


            <div className="lg:w-[1200px] mt-16 flex items-center justify-center w-full mx-auto">
                <Outlet></Outlet>
            </div>


            

        </div>
    );
};

export default Root;