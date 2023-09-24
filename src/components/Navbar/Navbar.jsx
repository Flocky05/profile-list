import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between bg-black text-white px-10 lg:px-20 p-4 shadow-lg">
            <Link to="/"> <h3 className="text-xl">Profile-list</h3> </Link>
            <div className="flex justify-around gap-10 lg:gap-20">
                <Link to="/about" > <h3 className="text-md lg:text-lg">About</h3></Link>
                <Link to="/blog" > <h3 className="text-md lg:text-lg">Blog</h3></Link>
                <Link to="/login" > <h3 className="text-md lg:text-lg">Login</h3></Link>
            </div>
        </div>
    );
};

export default Navbar;