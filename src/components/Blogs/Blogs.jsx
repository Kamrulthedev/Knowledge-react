import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';


const Blogs = ({hanleAddtoBookmarek}) => {

    const [blogs, setblogs] = useState ([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    },[])


    return (
        <div className="md:w-2/3">
         {/* <h1 className="text-3xl">Blogs:{blogs.length}</h1> */}
         {
            blogs.map(blog => <Blog
                 key={blog.id} 
                 blog={blog}
                 hanleAddtoBookmarek={hanleAddtoBookmarek}
                 ></Blog>)
         }
        </div>
    );
};
Blogs.propTypes = {
    hanleAddtoBookmarek: PropTypes.func
}
export default Blogs;