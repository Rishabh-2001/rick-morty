import React from 'react'
import Card from './Card'
import homePageStyle from '../style/HomePage.module.css'
import NoData from './NoData'

const CardsPage = ({loading, error, charactersData, page, setPage}) => {


    
  return (
    <div>
             

{charactersData && charactersData?.results && charactersData?.results?.length>0 ?
<>

    <div className={homePageStyle?.homepageContainer} >
      {  charactersData?.results?.map((character,idx)=>(
       
              <Card  key={idx} character={character} info={charactersData?.info} />
       
        ))}

    </div>
              <div className={homePageStyle?.btnGroup} style={{margin:"2rem 0"}}>
           {page>=2 &&   <button onClick={()=> setPage(prev=>prev-1)}>
                Previous Page
              </button>}
              <button onClick={()=> setPage(prev=>prev+1)}>
                Next Page
              </button>
         
           <span>Total page {charactersData?.info?.pages}</span>
           </div>
           </>
  
    :
        <div>
         <NoData />
        </div>


}
    </div>
  )
}

export default CardsPage