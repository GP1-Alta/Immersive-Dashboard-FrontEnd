import React, { FC } from "react";

interface InfoBoxProps {
  title?: string;
  number?: number;
}

const InfoBox: FC<InfoBoxProps> = ({ title, number }) => {
  return (
    <div>
      <div className="card w-[300px] bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
