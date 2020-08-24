import { useState} from "react";
import zomato from "../api/zomato";

export default () => {
  const [results, setResult] = useState([]);
  const [isCity, setIsCity] = useState(null);
  // const [errorMessage, setErrorMessage] = useState("");

  const handleIsCityToFalse = () => {
    if(isCity!==false){
      setIsCity(false);
    }
  }

  const handleIsCityToTrue = () => {
    if(isCity!==true){
      setIsCity(true);
    }
  }

  const handleSetResult = (pData) => {
    setResult(pData);
  }

  const searchApi = async (searchTerm) => {
  
      const city_response = await zomato.get("/cities", {
        params: {
          q: searchTerm,       
        }});

        if(city_response.data.location_suggestions.length===0){

          handleIsCityToFalse();

        } else {

          const response = await zomato.get("/search", {
            params: {
              city_id: city_response.data.location_suggestions[0].id,
              start:0,
              count:100,
          }});
        
          handleSetResult(response.data.restaurants);
          handleIsCityToTrue();
        }

  };

  const searchAccToDeviceLocation = async (pLatitude,pLongitude) => {
    const city_response = await zomato.get("/search", {
      params: {
        lat:pLatitude,
        lon:pLongitude,    
      }});

      handleSetResult(city_response.data.restaurants);
  };

  return [searchAccToDeviceLocation,searchApi,isCity,handleSetResult, results];
};
