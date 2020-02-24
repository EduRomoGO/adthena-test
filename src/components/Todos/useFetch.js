import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const apiData = await axios.get(url);
        setIsLoading(false);
        setData(apiData);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchData();
  }, [url]);

  return [data, isLoading, isError];
};
