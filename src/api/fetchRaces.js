import { useState, useEffect } from 'react';

const fetchRaces = () => {
  return fetch("https://www.betright.com.au/api/racing/todaysracing", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    }).then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('error getting races -> ', error);
      return [];
    });
}

const useFetchRaces = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetchRaces().then((racesResult) => setRaces(racesResult));;
  }, [])

  const categories = Object.keys(races);

  return {categories, races};
}

export { useFetchRaces }
