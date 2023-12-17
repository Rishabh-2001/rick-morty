import React, { useContext } from 'react'
import headerStyle from "../style/Header.module.css";
// import logo from '../assets/desktop-wallpaper-rick-and-morty-rick-and-morty-season-rick-and-morty-characters-rick-and-morty-poster.jpg'
import logo from '../assets/Rick-And-Morty-Logo-Download-Free-PNG.png'
import SearchContext from '../context/SearchContext.js'
const Header = () => {

    const context = useContext(SearchContext);
    console.log("CCC", context);
    const {search,setSearch}=context;

  return (
    <div className={headerStyle?.headerContainer}>
        <div className={headerStyle?.boxRow}>
          <img src={logo} alt='logo' className={headerStyle?.headerLogo} />
          <input placeholder='Search here...'  value={search} onChange={(e)=>setSearch(e.target.value)} className={headerStyle?.search} />
          <button className={headerStyle?.btn}>Search</button>
        </div>

        <div className={headerStyle?.boxRow}>
            <span>Location</span>
            <span>Episodes</span>

        </div>
    </div>
  )
}

export default Header;