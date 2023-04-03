import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=puerto varas&appid=82e845dcd486575303f22bf3fb66f131&units=metric'
      )
        .then(response => {
          if (!response.ok) throw new Error('No se pudo obtener la respuesta');

          return response.json();
        })
        .then(jsonData => {
          setData(jsonData);
        });
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return (
    <DataContext.Provider value={(data, error)}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
