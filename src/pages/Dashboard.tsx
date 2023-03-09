import React from "react";
import InfoBox from "../components/InfoBox";
import Layout from "../components/Layout";

const Dashboard = () => {

  return (
    <Layout>
      {
        screen.width > 767
          ? <div>dekstop</div>
          : <div>
            <div className="w-full h-44 bg-blue ">header</div>
          </div>
      }
    </Layout>
  );
};

export default Dashboard;
