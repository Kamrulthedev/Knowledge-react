
import { useState } from 'react'
import './App.css'
import Haders from './Haders'
import Blogs from './components/Blogs/Blogs'
import Bookmarsks from './components/Bookmarks/Bookmarsks'

function App() {
 
  const [bookmarks , setBookmarks] = useState([]);

  const hanleAddtoBookmarek = blog =>{
   const newBookmarks = [...bookmarks , blog];
   setBookmarks(newBookmarks)
  }

  return (
    <>
     
      <Haders></Haders>
     <main className='md:flex max-w-7xl mx-auto mt-4'>
     <Blogs hanleAddtoBookmarek ={hanleAddtoBookmarek}></Blogs>
     <Bookmarsks bookmarks={bookmarks}></Bookmarsks>
     </main>
       
       
    </>
  )
}

export default App
