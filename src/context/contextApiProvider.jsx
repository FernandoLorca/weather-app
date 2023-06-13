import { createContext, useEffect, useState } from 'react';

export const ContextApi = createContext();

const contextApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [urlFetch, setUrlFetch] = useState('');
  const [error, setError] = useState('');
  const handleButtonClick = () => {
    if (!inputValue) return;

    setUrlFetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=82e845dcd486575303f22bf3fb66f131`
    );
  };

  const fetchData = async url => {
    try {
      const response = await fetch(url);
      if (response.status === 404) throw new Error('City not found');
      const data = await response.json();
      setData([data]);
      setError('');
    } catch (error) {
      console.error(error);
      setError('City not found');
    }
  };

  useEffect(() => {
    if (!inputValue) return;
    fetchData(urlFetch);
  }, [urlFetch]);
  return (
    <ContextApi.Provider
      value={{ data, handleButtonClick, inputValue, setInputValue, error }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default contextApiProvider;
