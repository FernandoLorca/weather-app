function App() {
  const date = new Date();

  return (
    <div className="bg-white rounded-3xl p-5">
      <div className="flex justify-center gap-5 my-5">
        <input
          type="text"
          placeholder="Search for city"
          className="border-2 rounded-full text-center py-2 w-96"
        />
        <button className="bg-orange-600 flex justify-center items-center rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-search"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-white"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </button>
      </div>
      <div className="flex justify-center items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-map-pin-filled"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-orange-600"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
            stroke-width="0"
            fill="currentColor"
          ></path>
        </svg>
        <p className="font-bold text-xl">Puerto Varas</p>
      </div>
      <div className="flex justify-center py-5">
        <img src="https://picsum.photos/500/500" alt="" className="w-52 h-52" />
      </div>
      <div className="text-center">
        <p className="text-7xl font-bold text-orange-600">12ºC</p>
        <p className="text-xl text-slate-400">Clouds</p>
      </div>
      <div className="flex justify-center gap-5 px-5 my-5">
        <div className="flex flex-col items-center box-shadow w-36 py-4 px-6 rounded-3xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-sun-low"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-10 h-10 mb-2 text-orange-600"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
            <path d="M4 12h.01"></path>
            <path d="M12 4v.01"></path>
            <path d="M20 12h.01"></path>
            <path d="M12 20v.01"></path>
            <path d="M6.31 6.31l-.01 -.01"></path>
            <path d="M17.71 6.31l-.01 -.01"></path>
            <path d="M17.7 17.7l.01 .01"></path>
            <path d="M6.3 17.7l.01 .01"></path>
          </svg>
          <p className="font-bold text-xl text-slate-700">12ºC</p>
          <p className="text-slate-400">Feels like</p>
        </div>
        <div className="flex flex-col items-center box-shadow w-36 py-4 px-6 rounded-3xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-wind"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-10 h-10 mb-2 text-orange-600"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24"></path>
            <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24"></path>
            <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"></path>
          </svg>
          <p className="font-bold text-xl text-slate-700">3,6 m/s</p>
          <p className="text-slate-400">Wind</p>
        </div>
        <div className="flex flex-col items-center box-shadow w-36 py-4 px-6 rounded-3xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-droplet"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-10 h-10 mb-2 text-orange-600"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z"></path>
          </svg>
          <p className="font-bold text-xl text-slate-700">24%</p>
          <p className="text-slate-400">Humidity</p>
        </div>
        <div className="flex flex-col items-center box-shadow w-36 py-4 px-6 rounded-3xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-eye-check"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-10 h-10 mb-2 text-orange-600"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M11.143 17.961c-3.221 -.295 -5.936 -2.281 -8.143 -5.961c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.222 .37 -.449 .722 -.68 1.057"></path>
            <path d="M15 19l2 2l4 -4"></path>
          </svg>
          <p className="font-bold text-xl text-slate-700">10 Km</p>
          <p className="text-slate-400">Visibility</p>
        </div>
      </div>
    </div>
  );
}

export default App;
