import { createContext, useEffect, useState } from "react";

export const API_URL =`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;
export const MovieContext= createContext();

export const MovieProvider=({children})=>{

    const[loading, setLoading]= useState(true);
    const[movie, setMovie]= useState([]);
    const[isError, setIsError]= useState({show:'false', msg:""})
    const[query, setQuery]= useState('hacker')
    const[theme, setTheme]= useState('light-theme')

    const toggleTheme=()=>{
        theme==='dark-theme'?setTheme('light-theme'): setTheme('dark-theme')
    }

     const getMovies=async(url)=>{
        setLoading(true);
        try{
            const res= await fetch(url);
            const data= await res.json();
            console.log(data)
            if(data.Response==='True'){
                setLoading(false);
                setIsError({
                    show:false,
                    msg:'',
                })
                setMovie(data.Search)
            }else{
                setIsError({
                    show:true,
                    msg:data.Error,
                })
                
            }
        }catch(error){
            console.log(error)
        }
    }
    

 
 useEffect(()=>{
    let Timerout=setTimeout(()=>{
     getMovies(`${API_URL}&s=${query}`)
    },800)
   return()=>clearTimeout(Timerout) 
    },[query])
// useDebounce(query)

    useEffect(()=>{
        document.body.className=theme;
    },[theme])

    return <MovieContext.Provider value={{isError,loading,setLoading,movie,query, setQuery,setMovie,API_URL,toggleTheme,setIsError}}>
        {children}
        </MovieContext.Provider>
}