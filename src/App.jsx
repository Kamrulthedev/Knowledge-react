
import './App.css'
import Haders from './Haders'
import Blogs from './components/Blogs/Blogs'
import Bookmarsks from './components/Bookmarks/Bookmarsks'

function App() {
 

  return (
    <>
     
      <Haders></Haders>
     <main className='md:flex mt-4'>
     <Blogs></Blogs>
     <Bookmarsks></Bookmarsks>
     </main>
       
       
    </>
  )
}

export default App
