import { useEffect, useState } from "react";
import AboutDetail from "./AboutDetail";


const About = () => {
    const [profiles,setProfile]=useState([]);
    useEffect(()=>{
        fetch('profile.json')
        .then(res=>res.json())
        .then(data=>setProfile(data))
    },[])

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-20 gap-10 bg-gradient-to-r from-sky-100 to-indigo-300">
            {
                profiles.map(profile=><AboutDetail
                key={profile.id}
                data={profile}
                ></AboutDetail>)
            }
        </div>
    );
};

export default About;