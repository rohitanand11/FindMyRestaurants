import { useState} from "react";
import zomato from "../api/zomato";

export default () => {
  const [results, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
  
      const city_response = await zomato.get("/city", {
        params: {
          q: searchTerm,       
        }});
        const response = await zomato.get("/search", {
          params: {
            city_id: city_response.location_suggestions[0].id,
          
        }});
      
      setResult(response.data.restaurants);
  };

  return [searchApi, results, errorMessage];
};
