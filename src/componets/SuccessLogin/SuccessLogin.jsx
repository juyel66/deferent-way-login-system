import { Link } from "react-router-dom";


const SuccessLogin = () => {
    return (
        <div>
            <h1 className="text-5xl text-center  text-green font-bold">
                Login Success
            </h1>
            <h1 className="text-center text-3xl mt-10 border-2 h-16 flex justify-center items-center rounded-xl border-blue-700 bg-gray-300">
                Coming Soon
            </h1>
            <h1 className="text-2xl text-center mt-10 text-green-500 ">The features of this application will be updated in a few days</h1>
            <div className="text-center mt-7 ">
    <Link to="/"><button className="btn bg-blue-500 text-xl text-white rounded-xl">Back to home</button></Link>
</div>

        </div>
        
    );
};

export default SuccessLogin;