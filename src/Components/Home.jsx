import{BrowserRouter, Routes,Route} from 'react-router-dom'
import Singlemovie from './Singlemovie'
import ProtectedRoutes from './ProtectedRoutes'
import Movies from './Movies'
import './Movie.css'
import Search from './Search'
import {useRef} from 'react'

const Home = () => {
    
    const username= useRef()
    const password= useRef()
    const getUser=localStorage.getItem('userData')
    const getpassword=localStorage.getItem('password')
    const handleSubmit=()=>{
        if(username.current.value==='test'&& password.current.value==='test'){
            localStorage.setItem('userData', 'test')
            localStorage.setItem('password', 'test')
        } 
    }
    
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
   
  return (
    <div className='main'>

    {getUser&&getpassword?
    <div>
        <div>
        <button onClick={handleClick} className='logout'>Logout</button>
         <div>
     <BrowserRouter>
     <Routes>
        
     <Route element={<ProtectedRoutes/>}>
     <Route path='movie/:id' element={<Singlemovie/>}/>
     <Route path='/' element={<Movies/>}/>
     </Route>
    
     </Routes>
     </BrowserRouter>
     </div>
       </div> 
        </div>:
        <form onSubmit={handleSubmit}>
        <div>
        <input type='text' placeholder='Username' style={{marginBottom:'2rem'}} ref={username}/><br/>
        <input type='password' placeholder='Password' style={{marginBottom:'2rem'}} ref={password} /><br/>
        <button className='login' >Login</button>
        </div>
        </form>
    }
    </div>
 
  )
}

export default Home