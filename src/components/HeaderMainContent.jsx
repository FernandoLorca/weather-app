const HeaderMainContent = ({ data, weatherImage, svgIcons }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        {svgIcons.place}
        <p className="font-bold text-xl">{data[0] && data[0].name}</p>
      </div>
      <div className="flex justify-center py-5">
        <img src={weatherImage} alt="" className="w-52 h-52" />
      </div>
      <div className="text-center">
        <p className="text-7xl font-bold text-purple-100">
          {data[0] && Math.trunc(data[0].main.temp)}ºC
        </p>
        <p className="text-xl text-slate-400"></p>
      </div>
    </>
  );
};

export default HeaderMainContent;
