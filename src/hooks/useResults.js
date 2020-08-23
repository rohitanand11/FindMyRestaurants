import { useState} from "react";
import zomato from "../api/zomato";

export default () => {
  const [results, setResult] = useState([]);
  const [isCity, setIsCity] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

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
          }});
        
          setResult(response.data.restaurants);
          handleIsCityToTrue();
        }

  };

  return [searchApi,isCity, results, errorMessage];
};
