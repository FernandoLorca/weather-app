import { createContext, useEffect, useState } from 'react';

export const ContextApi = createContext();

const contextApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [inputStatus, setInputStatus] = useState('hidden');
  const [contentStatus, setContentStatus] = useState('hidden');
  const [mainContent, setMainContent] = useState('hidden');
  const [inputValue, setInputValue] = useState('');
  const [urlFetch, setUrlFetch] = useState('');

  const handleButtonClick = () => {
    if (inputValue === '' && data === '') {
      setInputStatus('block');
      setContentStatus('hidden');
    } else {
      setInputStatus('hidden');
      setUrlFetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=82e845dcd486575303f22bf3fb66f131`
      );
      setMainContent('block');
      setContentStatus('block');
      setInputValue('');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(urlFetch);
        if (res.ok) {
          const data = await res.json();
          setData(data);
        } else if (res.tatus === 404 || res.status === 400) {
          setMainContent('hidden');
          throw new Error(
            `Error al obtener datos de la API: ${res.status} StatusText: ${res.statusText} URL: ${res.url}`
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return <ContextApi.Provider value={{ data }}>{children}</ContextApi.Provider>;
};

export default contextApiProvider;
