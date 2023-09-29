import React from "react";

const Ball = (props) => {
  const { technology } = props;

  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="sm:text-[15px] text-secondary tracking-wider cursor-pointer hover:text-white">{technology.name}</h3>
      <img src={technology.icon} alt={technology.name} />
    </div>
  )
};

export default Ball;