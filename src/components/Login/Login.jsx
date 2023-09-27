import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.avif"

const Login = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center p-20">Please Login</h2>
            <div className="grid grid-cols-2 items-center">
                <div>
                    <form className="m-12" action="">
                        <div>
                            <p>Email:</p>
                            <input className="w-3/5 h-7 rounded-md p-2 bg-gray-100" type="email" placeholder="Enter your mail" />
                        </div>
                       <div className="  mt-5 inline-box">
                            <p>Password:</p>
                            <input className="w-3/5 h-7 rounded-md p-2 bg-gray-100" type="password" placeholder="Enter your Password" />
                       </div>
                       <button className="bg-fuchsia-600 px-7 py-1 rounded-lg text-white mt-3 inline-box">Submit</button>
                       <p className="mt-2">Dont have account, <Link className="text-fuchsia-600" to="/register">register now</Link> </p>
                    </form>
                    
                </div>
                <img className="p-10" src={img} alt="" />
            </div>
        </div>
    );
};

export default Login;