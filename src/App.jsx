import { useContext } from 'react';
import { ContextApi } from './context/contextApiProvider';

import SearchInput from './components/SearchInput';
import MainContent from './components/MainContent';

function App() {
  const { data, handleButtonClick, inputValue, setInputValue, error } =
    useContext(ContextApi);

  console.log(error);

  return (
    <div className="bg-white rounded-3xl py-5 px-16">
      <div className="my-5">
        <SearchInput
          handleButtonClick={handleButtonClick}
          inputValue={inputValue}
          setInputValue={setInputValue}
          error={error}
        />
        <div
          className={`flex flex-col justify-center items-center transition-opacity duration-500 ${
            error !== 'City not found' ? 'hidden' : 'flex'
          }`}
        >
          <img src="/error.svg" alt="" className="w-64 h-64" />
          <p className="text-xl text-slate-400">Must be a valid city name</p>
        </div>
      </div>
      <MainContent data={data} />
    </div>
  );
}

export default App;
