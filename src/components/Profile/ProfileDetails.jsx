import { Link } from "react-router-dom";


const ProfileDetails = ({profile,handleViewDetails}) => {
    const {name,img,bio}=profile;
    return (
        <div>
             <div className="flex flex-col items-center">
            
            <div className="bg-blue-100 w-2/4 m-10 rounded-lg">
            <div className="flex justify-between p-4 items-center">
                <h3>Name: <span className="text-xl font-bold">{name}</span> </h3>
                <img className="w-16 h-16 rounded-full border-2 border-red-500" src={img} alt="" />
            </div>
            <div className="p-4">
                <p>{bio}</p>
                <Link className="px-4 py-1 rounded-lg bg-pink-500 text-white mt-10 inline-block"onClick={()=> handleViewDetails(profile)}  to="/ProfileCard">learn More</Link>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ProfileDetails;