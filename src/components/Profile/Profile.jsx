import { useEffect, useState } from "react";
import ProfileDetails from "./ProfileDetails";


const Profile = () => {
    const [profiles,setProfile]=useState([]);
    useEffect(()=>{
        fetch('profile.json')
        .then(res=>res.json())
        .then(data=>setProfile(data))
    },[])

    return (
        <div>
            <h3 className="p-10 text-center text-4xl font-bold">Some <span className="text-blue-400">Profile</span> of Our <span className="text-blue-400">USERs</span> </h3>
            {
                profiles.map(profile=><ProfileDetails
                key={profile.id}
                profile={profile}
                ></ProfileDetails>)
            }
        </div>
    );
};

export default Profile;