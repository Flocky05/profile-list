import img from "../../assets/images/Blog/creative.avif"
import img1 from "../../assets/images/Blog/image1.avif"
import img2 from "../../assets/images/Blog/instructor.avif"
import img3 from "../../assets/images/Blog/student1.avif"
import img4 from "../../assets/images/Blog/tree.avif"
import img5 from "../../assets/images/Blog/pen.avif"

const Blog = () => {
    return (
        <div className="bg-gradient-to-b from-cyan-100 to-blue-100">
            <h3 className="text-3xl font-bold text-center p-5">Some of Our Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 lg:mx-20 p-6 lg:p-20">
                <div className="p-4 lg:p-10 border-2 border-blue-400 m-5 rounded-lg">
                    <img src={img} alt="" />
                    <h2>Title : <span className="font-semibold">Creative Work</span> </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis quasi blanditiis aut facere maiores, inventore cum atque, sed ducimus earum saepe magnam architecto iste perspiciatis? Iste ea saepe eligendi.</p>
                    <button className="bg-yellow-400 px-5 py-1 rounded-lg text-white mt-3 inline-block"> More</button>
                </div>
                <div className="p-10 border-2 border-blue-400 m-5 rounded-lg">
                    <img src={img1} alt="" />
                    <h2>Title : <span className="font-semibold">Future Plan</span> </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis quasi blanditiis aut facere maiores, inventore cum atque, sed ducimus earum saepe magnam architecto iste perspiciatis? Iste ea saepe eligendi.</p>
                    <button className="bg-yellow-400 px-5 py-1 rounded-lg text-white mt-3 inline-block"> More</button>
                </div>
                <div className="p-10 border-2 border-blue-400 m-5 rounded-lg">
                    <img src={img2} alt="" />
                    <h2>Title : <span className="font-semibold">Software Development</span> </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis quasi blanditiis aut facere maiores, inventore cum atque, sed ducimus earum saepe magnam architecto iste perspiciatis? Iste ea saepe eligendi.</p>
                    <button className="bg-yellow-400 px-5 py-1 rounded-lg text-white mt-3 inline-block"> More</button>
                </div>
                <div className="p-10 border-2 border-blue-400 m-5 rounded-lg">
                    <img src={img3} alt="" />
                    <h2>Title : <span className="font-semibold">Student Planning</span> </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis quasi blanditiis aut facere maiores, inventore cum atque, sed ducimus earum saepe magnam architecto iste perspiciatis? Iste ea saepe eligendi.</p>
                    <button className="bg-yellow-400 px-5 py-1 rounded-lg text-white mt-3 inline-block"> More</button>
                </div>
                <div className="p-10 border-2 border-blue-400 m-5 rounded-lg">
                    <img src={img4} alt="" />
                    <h2>Title : <span className="font-semibold">Environment Planing</span> </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis quasi blanditiis aut facere maiores, inventore cum atque, sed ducimus earum saepe magnam architecto iste perspiciatis? Iste ea saepe eligendi.</p>
                    <button className="bg-yellow-400 px-5 py-1 rounded-lg text-white mt-3 inline-block"> More</button>
                </div>
                <div className="p-10 border-2 border-blue-400 m-5 rounded-lg">
                    <img src={img5} alt="" />
                    <h2>Title : <span className="font-semibold">Pen arts</span> </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis quasi blanditiis aut facere maiores, inventore cum atque, sed ducimus earum saepe magnam architecto iste perspiciatis? Iste ea saepe eligendi.</p>
                    <button className="bg-yellow-400 px-5 py-1 rounded-lg text-white mt-3 inline-block"> More</button>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;