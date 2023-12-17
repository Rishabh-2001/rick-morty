import React from 'react'
import cardStyles from '../style/Card.module.css'
import {useLocation} from 'react-router-dom'
import maleIcon from '../assets/male.png'
import femaleIcon from '../assets/femenine.png'
import globe from '../assets/globe.png'
import location from '../assets/placeholder.png'
import { Link } from 'react-router-dom'

const Profile = () => {
    const {state}=useLocation();
   const character=state;


   const episodeJsx= (ep)=>{
    const parts= ep.split('/')
    return parts[parts?.length-1];
 }




  return (
    <div>
        <Link to="..">Go Back</Link>
       <div>
       <div className={cardStyles?.innerContainer}>
        <div >
      <img src={character?.image} alt="charImg" style={{ width: "220px", height:"220px", objectFit:"fill", margin:"0 auto" }} loading="lazy"></img>
        </div>

      <div className={`${cardStyles?.cardBody}`}>
        <div className={`${cardStyles?.rowBetween} ${cardStyles?.cardRows}`} style={{justifyContent:"space-around"}}>
          <div>
            <span className={cardStyles?.cardLabels} >Name: </span>
            <span className={cardStyles?.cardDetails}> {character?.name}</span>
          </div>
          <div>
            <span className={`${cardStyles[character?.status]} ${cardStyles?.status}  `}></span>
            <span className={cardStyles?.cardDetails}> {character?.status}</span>
          </div>
        </div>

        <div className={cardStyles?.rowBetween} style={{justifyContent:"space-around"}}>
          <div className={cardStyles?.cardDetails}>
            <span className={cardStyles?.cardLabels} >Species:</span>: {character?.species}
          </div>
          <div className={cardStyles?.iconApart}>
            <img src={character?.gender==="Male"? maleIcon: character?.gender==="Female"? femaleIcon : maleIcon } alt="male-icon" width={25} height={25} className={cardStyles?.iconSpace} ></img>
            <span className={cardStyles?.cardDetails}>{character?.gender}</span>
          </div>
        </div>

        <div className={`${cardStyles?.cardBody} ${cardStyles?.cardRows}  ${cardStyles?.iconApart}`} style={{justifyContent:"space-around"}}>
          <span className={cardStyles?.cardLabels} >Origin</span>
         
      
           <div className={`${cardStyles?.iconApart}  `}  >
           <div>
           <img src={globe} alt="male-icon" width={20} height={20} className={`${cardStyles?.iconSpace}`}></img>
          </div>
             <span className={cardStyles?.cardDetails}>{character?.origin?.name}</span>
          <span className={`${cardStyles?.cardDetails} ${cardStyles?.link} `}>Visit</span>
          </div>
       
   
        </div>

        <div className={`${cardStyles?.cardRows} ${cardStyles?.iconApart}  `} style={{justifyContent:"space-around"}}>
          <span className={cardStyles?.cardLabels} > Location: </span>
           <div  className={`${cardStyles?.iconApart}  `} >
            <div>
            <img src={location} alt="male-icon" width={20} height={20} className={cardStyles?.iconSpace} ></img>
            </div>
            <span className={cardStyles?.cardDetails}>{character?.location?.name}</span>
          </div>
        </div>



        <div className={`${cardStyles?.cardBody} ${cardStyles?.cardRows} ${cardStyles?.iconApart}`} style={{justifyContent:"space-around"}}>
          <span className={cardStyles?.cardLabels} >Episodes: </span>
         {character?.episode?.length>0 ? <div>
            {character && character?.episode && character?.episode?.map((ep, idx)=>(
                <span key={idx} className={cardStyles?.episode} style={{margin:" 1rem"}}> {episodeJsx(ep)} </span>
            ))}
        
          </div> : <span>No Featured Episodes</span>}
        </div>
       
     
      </div>


   

   
    
    </div>
       </div>
    </div>
  )
}

export default Profile