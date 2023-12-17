import React, { useState } from "react";
import cardStyles from "../style/Card.module.css";
import maleIcon from "../assets/male.png";
import femaleIcon from '../assets/femenine.png'
import globe from "../assets/globe.png";
import { Link } from "react-router-dom";
import location from "../assets/placeholder.png";
import fly from "../assets/superhero.png"

const Card = ({character, info}) => {
const [isHovered,setIsHovered]=useState(false)
  
  const episodeJsx= (ep)=>{
     const parts= ep.split('/')
     return parts[parts?.length-1];
  }



 

  return (
    <div className={cardStyles?.container}   >
    <div className={cardStyles?.innerContainer}>
        <div >
      <img src={character?.image} alt="charImg" style={{ width: "100%", height:"220px", objectFit:"fill", margin:"0 auto" }} loading="lazy"></img>
        </div>

      <div className={`${cardStyles?.cardBody}`}>
        <div className={`${cardStyles?.rowBetween} ${cardStyles?.cardRows}`}>
          <div>
            <span className={cardStyles?.cardLabels} >Name: </span>
            <span className={cardStyles?.cardDetails}> {character?.name}</span>
          </div>
          <div>
            <span className={`${cardStyles[character?.status]} ${cardStyles?.status}  `}></span>
            <span className={cardStyles?.cardDetails}> {character?.status}</span>
          </div>
        </div>

        <div className={cardStyles?.rowBetween}>
          <div className={cardStyles?.cardDetails}>
            <span className={cardStyles?.cardLabels} >Species:</span>: {character?.species}
          </div>
          <div className={cardStyles?.iconApart}>
            <img src={character?.gender==="Male"? maleIcon: character?.gender==="Female"? femaleIcon : maleIcon } alt="male-icon" width={25} height={25} className={cardStyles?.iconSpace} ></img>
            <span className={cardStyles?.cardDetails}>{character?.gender}</span>
          </div>
        </div>

        <div className={`${cardStyles?.cardBody} ${cardStyles?.cardRows}  ${cardStyles?.iconApart}`}>
          <span className={cardStyles?.cardLabels} >Origin</span>
         
      
           <div className={`${cardStyles?.iconApart}  `}  >
           <div>
          <img src={globe} alt="male-icon" width={20} height={20} className={`${cardStyles?.iconSpace}`}></img>
          </div>
             <span className={cardStyles?.cardDetails}>{character?.origin?.name}</span>
          </div>
          <span className={`${cardStyles?.cardDetails} ${cardStyles?.link} `}>Visit</span>
       
   
        </div>

        <div className={`${cardStyles?.cardRows} ${cardStyles?.iconApart}  `}>
          <span className={cardStyles?.cardLabels} > Location: </span>
           <div  className={`${cardStyles?.iconApart}  `} >
            <div>
            <img src={location} alt="male-icon" width={20} height={20} className={cardStyles?.iconSpace} ></img>
            </div>
            <span className={cardStyles?.cardDetails}>{character?.location?.name}</span>
          </div>
        </div>



        <div className={`${cardStyles?.cardBody} ${cardStyles?.cardRows} ${cardStyles?.iconApart}`}>
          <span className={cardStyles?.cardLabels} >Episodes: </span>
         {character?.episode?.length>0 ? <div>
            {character && character?.episode && character?.episode?.slice(0,5)?.map((ep, idx)=>(
                <span key={idx} className={cardStyles?.episode}> {episodeJsx(ep)} </span>
            ))}
            ...
          </div> : <span>No Featured Episodes</span>}
        </div>
       
     
      </div>
<Link to={`${character?.id}`} style={{textDecoration:"none"}} state={character} >
      <div className={cardStyles.seeMore}> 
        <p>Visit Profile</p>
      </div>
</Link>

   

   
    
    </div>


    </div>
  );
};

export default Card;
