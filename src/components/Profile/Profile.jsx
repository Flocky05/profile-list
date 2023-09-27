
import { useState } from "react";
import ProfileDetails from "./ProfileDetails";


const Profile = ({profiles}) => {

    const [cart,setCart]=useState([]);
    const handleViewDetails=profile=>{
        console.log(profile);
    }
    return (
        <div>
            <h3 className="p-10 text-center text-4xl font-bold">Some <span className="text-blue-400">Profile</span> of Our <span className="text-blue-400">USERs</span> </h3>
            {
                profiles.map(profile=><ProfileDetails
                key={profile.id}
                profile={profile}
                handleViewDetails={handleViewDetails}
                ></ProfileDetails>)
            }
            
        </div>
    );
};

export default Profile;