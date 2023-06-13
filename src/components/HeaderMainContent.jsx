const HeaderMainContent = ({ data, weatherImage }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2">
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
          className="text-orange-600 icon icon-tabler icon-tabler-map-pin-filled"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
            strokeWidth="0"
            fill="currentColor"
          ></path>
        </svg>
        <p className="font-bold text-xl">{data[0] && data[0].name}</p>
      </div>
      <div className="flex justify-center py-5">
        <img src={weatherImage} alt="" className="w-52 h-52" />
      </div>
      <div className="text-center">
        <p className="text-7xl font-bold text-orange-600">
          {data[0] && Math.trunc(data[0].main.temp)}ºC
        </p>
        <p className="text-xl text-slate-400"></p>
      </div>
    </>
  );
};

export default HeaderMainContent;
