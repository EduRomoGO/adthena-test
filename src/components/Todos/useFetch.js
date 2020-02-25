import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isComponentUnmounted, setIsComponentUnmounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsComponentUnmounted(false);

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

    if (!isComponentUnmounted) {
      fetchData();
    }

    return () => {
      setIsComponentUnmounted(true);
    };
  }, [url, isComponentUnmounted]);

  return [data, isLoading, isError];
};
