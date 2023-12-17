import React, { Suspense, useContext, useEffect, useState } from 'react'
import { getAllCharacters } from '../api/functions'
import Card from '../components/Card'
import homePageStyle from "../style/HomePage.module.css";
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../components/ErrorBoundary';
import SearchContext from '../context/SearchContext';

import debounce from 'lodash/debounce';
const CardsPage = React.lazy(()=> import("../components/CardsPage"))


const HomePage = () => {
    const [page,setPage]=useState(1)
   const context = useContext(SearchContext);
   const [gender,setGender]=useState("")
   const [status,setStatus]=useState("")
   const [species,setSpecies]=useState("")


   const {search,setSearch}=context;

    const [charactersData,setCharactersData]=useState()
const [loading,setLoading]=useState(false)
const [error,setError]=useState('')




const debouncedSearch = debounce((searchValue) => {
    setLoading(true);
    getAllCharacters({ page, search: searchValue, gender, species, status })
      .then((res) => {
        setLoading(false);
        console.log('RES544', res);
        setCharactersData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, 500);

  useEffect(() => {
    setLoading(true);
    getAllCharacters({ page, search, gender, species, status })
      .then((res) => {
        setLoading(false);
        console.log('RES544', res);
        setCharactersData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [page, gender, species, status]); // Execute on page, gender, species, or status change

  // Execute debouncedSearch only when the search parameter changes
  useEffect(() => {
    debouncedSearch(search);
    return () => debouncedSearch.cancel();
  }, [search]);






  return (
    <div>

     <div>
        <h2>Filters:</h2>
        <div className={homePageStyle?.filterBox}>
            <div>
       
            <label htmlFor=""> Status</label>
            <select className={homePageStyle?.select} onChange={(v)=>  setStatus(v.target.value) }>
            <option value={""}>
                    All
                </option>
                <option value={"Alive"}>
                    Alive
                </option>
                <option  value={"Dead"}>
                    Dead
                </option>
            </select>
                     
            </div>

            {/* <div>
       
       <label htmlFor=""> Location</label>
       <select  className={homePageStyle?.select} >
       <option>
               All
           </option>
           <option>
               Alive
           </option>
           <option>
               Dead
           </option>
       </select>
                
       </div> */}

       <div>
       
       <label htmlFor=""> Gender</label>
       <select className={homePageStyle?.select} onChange={(v)=>  setGender(v.target.value) } >
       <option value={""}>
               All
           </option>
           <option value={"Male"}>
               Male
           </option>
           <option value={"Female"}>
               Female
           </option>
       </select>
                
       </div>

       <div>
       
       <label htmlFor=""> Species</label>
       <select  className={homePageStyle?.select} onChange={(v)=>  setSpecies(v.target.value) } >
       <option value={""}>
               All
           </option>
           <option value={"Human"}>
               Human
           </option>
           <option value={"Alien"}>
               Alien
           </option>
       </select>
                
       </div>

 

        </div>
     </div>
     <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=> {}}>
       <Suspense fallback={<div>Loading</div>} >
         <CardsPage loading={loading} error={error} charactersData={charactersData} page={page} setPage={setPage} />
       </Suspense>
     </ErrorBoundary>

  
    </div>
  )
}

export default HomePage