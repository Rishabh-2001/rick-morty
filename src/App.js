
import HomePage from "./pages/HomePage";

import {Routes, Route} from 'react-router-dom'
import HomeLayout from "./layout/HomeLayout";
import Episode from "./pages/Episode";
import Location from "./pages/Location";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { createContext, useContext, useState } from "react";
import SearchContext from "./context/SearchContext";


function App() {
    const [search,setSearch]=useState(''); 

    const Context = useContext(SearchContext);
  return (
    <div className="App">
<SearchContext.Provider value={{search, setSearch}}>

        <Routes >
          <Route element={<HomeLayout />}  >
             <Route index element={<HomePage /> } />
             <Route path=":id" element={<Profile />}   />
             <Route path="episode" element={<Episode />}   />
             <Route path="episode/:id" element={<Location />}   />
             <Route path="location" element={<Location />}   />
             <Route path="location/:id" element={<Location />}   />
            <Route path="*"  element={<NotFound />}  />
                   
          </Route>
        </Routes>
        <Routes path="*"  element={<NotFound />}  />
          
</SearchContext.Provider>
      
    </div>
  );
}

export default App;
