import { useState } from 'react';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');

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
      handleImage();
    }
  };

  return (
    <div className="flex justify-center gap-5 mb-5">
      <input
        type="text"
        placeholder="Search for city name"
        className="border-2 rounded-full text-center py-2 w-96"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        className="bg-orange-600 flex justify-center items-center rounded-full p-3"
        onClick={handleButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white icon icon-tabler icon-tabler-search"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;
