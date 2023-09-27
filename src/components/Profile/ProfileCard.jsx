import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/ProfileContext";


const ProfileCard = () => {
    const {profiles}=useContext(Context);
    console.log(profiles);
    return (
        <div className="bg-gray-400 p-10 lg:p-20 m-10 lg:m-20 rounded-lg lg:flex">
            <img className="lg:w-2/4 rounded-lg" src={profiles.img} alt="" />
            <div className="p-8 lg:p-16">
                <h3>Name:<span className="text-lg font-semibold">{profiles.name}</span> </h3>
                <h3>Home-Town: <span className="text-lg font-semibold">{profiles.home}</span> </h3>
                <p>Gender: {profiles.gendar} </p>
                <p>Profession <span className="text-md font-semibold"> {profiles.profession}</span> </p>
                <p>Hobby : <span className="text-md font-semibold"> {profiles.hobby}</span> </p>
                <p>Institute : <span className="text-md font-semibold"> {profiles.institute}</span> </p>
                <p>Blod : <span className="text-md font-semibold"> {profiles.blod}</span> </p>
                <p>Department : <span className="text-md font-semibold"> {profiles.Department}</span> </p>
                <p>{profiles.bio}</p>
                <Link to="/" className="bg-blue-500 px-6 py-1 rounded-lg text-white mt-3 inline-block" >Back</Link>
            </div>
        </div>
    );
};

export default ProfileCard;