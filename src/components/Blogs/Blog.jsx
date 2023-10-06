
import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog}) => {
    const{title, cover,author,hashtags,author_img,reading_time,posted_date}= blog;
    return (
        <div>
            <img className='w-96 ml-24 rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mt-8'>
                <div className='flex'>
                    <img className='w-14 ml-24' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p >{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='ml-24 font-bold'>{reading_time}min read</span><button className='ml-2 text-red-700 text-xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-2xl ml-24 m-4 font-bold">{title}</h2>
            <div>
                <p className='ml-24 mb-4 font-bold'>{
                hashtags.map((hash, idx) => <span key={idx}> <a href=''>#{hash}</a></span>)
                }</p>
                <button className='ml-24 mb-4 text-red-900 bg-green-100 rounded-lg border-b-4 font-bold'>Mark as read</button>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;