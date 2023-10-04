import profile from '../src/assets/images/profile.png'

const Haders = () => {
    return (
        <div className='flex justify-between items-center'>
            <h1 className=' text-6xl font-bold '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Haders;