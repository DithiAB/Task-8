import React from 'react'
import { useContext } from 'react'
import { MovieContext } from './Context'

const Search = () => {
    const{query, setQuery, isError,toggleTheme}= useContext(MovieContext)
  return (
    <div>
        <section className='search'>
        <h1>Unlimited Movies, TV shows and more....</h1>
            <h2>Search your favourite Movie..</h2>
            <form action='#' onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <input type='text'
                        placeholder='Search here...'
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}/><br/>
                </div>         
                <div>
                <p>{isError.show&& isError.msg}</p> 
                </div>
            </form>
            <button onClick={toggleTheme} className='theme'>Toggle Theme</button>
            
        </section>
    </div>
  )
}

export default Search