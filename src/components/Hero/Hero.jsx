
import img from "../../assets/images/hero/hero.avif"
const Hero = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-20">
                <h2 className="text-3xl py-5 text-blue-400">Profile-List</h2>
                <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad alias, iusto beatae quasi, reprehenderit id officia saepe, et aliquam eum necessitatibus inventore corrupti excepturi. Id, corrupti? Libero, accusantium accusamus, quo eos modi sunt cumque suscipit ut delectus mollitia tempora minima rem nihil expedita incidunt at. Quasi in modi aspernatur illo?</p>
                <button className="bg-blue-400 px-6 py-2 rounded-lg text-white" >Leran More</button>
            </div>
            <img className="p-10 lg:p-20" src={img} alt="" />
        </div>
    );
};

export default Hero;