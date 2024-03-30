import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="lg:text-6xl text-3xl border-2 border-gray-400 rounded-xl h-20 flex justify-center items-center bg-gray-300 text-center">
                <h1>Welcome to our website</h1>
            </div>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl text-center text-purple-700 font-bold mt-8">Login Your Account</h1>
                <div className="flex flex-col items-center justify-center mt-10">
                    <Link to="/anotherLogin">
                        <button className="btn bg-green-500 w-44 h-16 rounded-xl border-2 border-blue-600 text-2xl text-white mb-4">Login now</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Home;
