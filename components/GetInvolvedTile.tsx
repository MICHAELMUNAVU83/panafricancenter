import React from "react";

interface GetInvolvedTileProps {
  bgColor?: string;
  bgImage?: string;
  iconSrc: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonStyle?: string;
  textColor?: string;
}

const GetInvolvedTile = ({
  bgColor,
  bgImage,
  iconSrc,
  title,
  description,
  buttonText = "Learn More",
  buttonStyle,
  textColor,
}: GetInvolvedTileProps) => {
  const tileClasses = `relative rounded-[30px] h-[400px]   p-6 flex flex-col items-center m-auto w-[100%] m-4 ${bgColor}`;

  const buttonClasses = `mt-4 py-2 px-4 rounded-[30px] ${buttonStyle}`;

  return (
    <div
      className={`${tileClasses}${tileClasses}`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {bgImage && (
        <div className="absolute inset-0  rounded-[30px] member-background "></div>
      )}

      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <img src={iconSrc} alt={`${title} icon`} className="w-8 h-8 mr-3" />
          <h2
            className={`text-lg md:text-[32px] libre-baskerville-bold text-white font-bold ${textColor}`}
          >
            {title}
          </h2>
        </div>
        <p className={`mb-4 leading-[32px] josefin-sans-regular ${textColor}`}>
          {description}
        </p>
        <button className={buttonClasses}>{buttonText}</button>
      </div>
    </div>
  );
};

export default GetInvolvedTile;
