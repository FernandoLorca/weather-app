const DetailsSquaresMainContent = ({ data, svgIcons, detail, text }) => {
  return (
    <div className="flex bg-slate-700 flex-col items-center box-shadow w-36 py-4 px-6 rounded-3xl ">
      {svgIcons}
      <p className="font-bold text-xl text-slate-100">
        {data[0] && Math.trunc(data[0].main.feels_like)}
        {detail}
      </p>
      <p className="text-slate-400">{text}</p>
    </div>
  );
};

export default DetailsSquaresMainContent;
