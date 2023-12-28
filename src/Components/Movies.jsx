import React, { useContext } from 'react'
import { MovieContext } from './Context'
import { NavLink } from 'react-router-dom'
import './Movie.css'
import Search from './Search'
const Movies = () => {
    const{movie,loading}= useContext(MovieContext)
    if(loading){
        return(
            <div>
                <Search/>
                <div style={{fontSize:'3rem', marginTop:'3rem'} }>Loading....</div>
            </div>
        )
    }
  return (
    <div className='movies'>
        <Search/>
        <section className='movie'>
        <div className='container grid'>
        {movie.map((elem)=>{
            const{imdbID,Title,Poster}=elem;
            const movieName= Title.substring(0,15)
            return(
                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className='card'>
                    <div className='card-info'>
                    <h2>{movieName.length>=15? `${movieName}....` : movieName}</h2>
                    <img src={Poster}/>
                    </div>   
                </div>
                </NavLink>
                
            )
        })} 
        </div>
        </section>
       
            
       
    </div>
  )
}

export default Movies