import { useEffect,useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './Context';
import './Movie.css'

const Singlemovie = () => {
    const {id}= useParams();
    const[loading, setLoading]= useState(true);
    const[movie, setMovie]= useState('');
    

    const getMovies=async(url)=>{
        setLoading(true);
        try{
            const res= await fetch(url);
            const data= await res.json();
            console.log(data)
            if(data.Response==='True'){
                setLoading(false);
                setMovie(data)
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        let Timerout=setTimeout(()=>{
         getMovies(`${API_URL}&i=${id}`)
        },800)
       return()=>clearTimeout(Timerout) 
    },[id])
    if(loading){
      return(
        <div>
         <p> Loading....</p>
          </div>
      )
    }
  return (
    <div className='singlemovie'>
       <div className='moviecard'>
        <figure className='img'>
          <img src={movie.Poster}/>
        </figure>
        <div className='card_content'>
          <p>Title:{movie.Title}</p>
          <p>Released:{movie.Released}</p>
          <p>{movie.Genre}</p>
          <p>Rating:{movie.imdbRating}</p>
          <p>Country:{movie.Country}</p>
          <NavLink to='/' className='button'>Back</NavLink>
        </div>
        
       </div>
       
       
    </div>
  )
}

export default Singlemovie