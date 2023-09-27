import { useContext } from "react";
import { Context } from "../../context/ProfileContext";


const ProfileCard = () => {
    const {profiles}=useContext(Context);
    console.log(profiles);
    return (
        <div>
            <h3>This profile card page , I do not want you see here.</h3>
            <img src={profiles.img} alt="" />
        </div>
    );
};

export default ProfileCard;