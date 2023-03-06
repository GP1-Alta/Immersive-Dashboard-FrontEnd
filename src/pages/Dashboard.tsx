import React from "react";
import InfoBox from "../components/InfoBox";
import Layout from "../components/Layout";

const Dashboard = () => {
  const data = [
    {
      title: "Mentee",
      number: 50,
    },
    {
      title: "User",
      number: 30,
    },
    {
      title: "Class",
      number: 10,
    },
  ];
  return (
    <div>
      <Layout>
        <div className="flex gap-5 justify-center my-5">
          {data.map((data) => (
            <InfoBox title={data.title} number={data.number} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
