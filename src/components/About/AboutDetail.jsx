

const AboutDetail = (props) => {
    const {img}=props.data;
    return (
        <div>
            <img className="w-60 border-2 border-green-500 rounded-full" src={img} alt="" />
        </div>
    );
};

export default AboutDetail;