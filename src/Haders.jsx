import profile from '../src/assets/images/profile.png'

const Haders = () => {
    return (
        <header className='flex justify-between items-center p-4 max-w-7xl mx-auto border-b-4'>
            <h1 className=' text-2xl font-bold '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Haders;