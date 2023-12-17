import axios from "axios"
const BASE_URL=process.env.REACT_APP_BASE_URL;

async function getAllCharacters(params)
{
    console.log("PPP:", params.page,params.search);
     try {
        let url=`${BASE_URL}/character?page=${params?.page}`;
     
        if(params?.search)
        {
            url+=`&name=${params?.search}`
        }
        if(params?.species)
        {
            url+=`&species=${params?.species}`
        }
        if(params?.status)
        {
            url+=`&status=${params?.status}`
        }
        if(params?.gender)
        {
            url+=`&gender=${params?.gender}`
        }
          const response=await axios.get(url)
           console.log("RESP", response);
           return response?.data
     } catch (error) {
        console.log("ERR occured", error);
       return {error}
     }
}

export {getAllCharacters};
