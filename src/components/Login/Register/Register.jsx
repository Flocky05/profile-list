import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
          <form className="ml-96 my-20 " action="">
                        <div>
                            <p>Frist Name:</p>
                            <input className="w-3/5 h-7 rounded-md p-2 bg-gray-100 mb-3" type="email" placeholder="Enter your frist Name" />
                        </div>
                        <div>
                            <p>Last Name:</p>
                            <input className="w-3/5 h-7 rounded-md p-2 bg-gray-100 mb-3" type="email" placeholder="Enter your Last Name" />
                        </div>
                        <div>
                            <p>Email:</p>
                            <input className="w-3/5 h-7 rounded-md p-2 bg-gray-100" type="email" placeholder="Enter your mail" />
                        </div>
                       <div className="  mt-5 inline-box">
                            <p>Password:</p>
                            <input className="w-3/5 h-7 rounded-md p-2 bg-gray-100" type="password" placeholder="Enter your Password" />
                       </div>
                       <div className="  mt-5 inline-box">
                            <p>Repassword:</p>
                            <input className="w-3/5 h-7 rounded-md p-2 bg-gray-100" type="password" placeholder="Again Enter your Password" />
                       </div>
                       <button className="bg-fuchsia-600 px-7 py-1 rounded-lg text-white mt-3 inline-box" ><Link to="/" >Submit</Link></button>
                       
                       <p className="mt-2">Already have account, <Link className="text-fuchsia-600" to="/login">Login now</Link> </p>
                    </form>  
        </div>
    );
};

export default Register;