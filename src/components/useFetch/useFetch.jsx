// ASSETS

// STYLES

// LIBRARIES
import { useEffect, useState } from "react";

// MISC

// COMPONENTS

// CONFIGURATION
const useFetch = (url) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // LIFE CYCLE
  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log("response :>> ", response);
        if (!response.ok) {
          throw Error("Error...could not fetch the data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [url]);

  // EVENT HANDLERS

  return { data, isLoading, error };
};

export default useFetch;
