
import { useContext } from "react";
import { Context } from "../../context/ProfileContext";
import ProfileDetails from "./ProfileDetails";


const Profile = ({profiles}) => {
    const {setProfile}=useContext(Context)
    const handleViewDetails=profile=>{
        console.log(profile);
        setProfile(profile)
    }
    return (
        <div>
            <h3 className="p-5 lg:p-10 text-center text-4xl font-bold">Some <span className="text-blue-400">Profile</span> of Our <span className="text-blue-400">USERs</span> </h3>
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