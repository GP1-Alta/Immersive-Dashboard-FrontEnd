import React, { FC } from "react";

interface CardProps {
  status?: string;
  feedback?: string;
}

const Card: FC<CardProps> = ({ status, feedback }) => {
  return (
    <div className="mx-16 my-10 p-8 rounded-lg shadow-md">
      <p className="my-5">{feedback}</p>
      <h1>Changed Status: {status}</h1>
    </div>
  );
};

export default Card;
