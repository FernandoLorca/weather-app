import DetailsSquaresMainContent from './DetailsSquaresMainContent';

const DetailsMainContent = ({ data, svgIcons }) => {
  return (
    <div className="flex justify-center gap-5 px-5 my-5">
      <DetailsSquaresMainContent
        data={data}
        svgIcons={svgIcons.sun}
        detail="ºC"
        text="Feels like"
      />
      <DetailsSquaresMainContent
        data={data}
        svgIcons={svgIcons.wind}
        detail="m/s"
        text="Wind"
      />
      <DetailsSquaresMainContent
        data={data}
        svgIcons={svgIcons.drop}
        detail="%"
        text="Humidity"
      />
      <DetailsSquaresMainContent
        data={data}
        svgIcons={svgIcons.vision}
        detail="Km"
        text="Visibility"
      />
    </div>
  );
};

export default DetailsMainContent;
