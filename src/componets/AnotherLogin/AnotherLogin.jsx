import { Link } from "react-router-dom";


const AnotherLogin = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center  text-blue-600 ">You can sign up with any one <br /> you want</h1>
            </div>
            <div className="flex flex-col mt-8 space-y-4">
                    <button className="btn bg-purple-600 w-full h-16 rounded-xl text-xl text-white border-2 border-green-500 mb-4">Sign Up with Google</button>
                    <button className="btn bg-purple-600 w-full h-16 rounded-xl text-xl text-white border-2 border-green-500 mb-4">Sign Up with GitHub</button>
                    <button className="btn bg-purple-600 w-full h-16 rounded-xl text-xl text-white border-2 border-green-500">Sign Up with Twitter</button> 
                    <Link to="/login"><button className=" h-16 btn text-white text-xl bg-green-500 rounded-xl w-full ">Another way to login</button></Link>
                </div>
            
        </div>
    );
};

export default AnotherLogin;