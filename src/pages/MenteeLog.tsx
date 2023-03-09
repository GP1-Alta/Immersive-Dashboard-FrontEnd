import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const MenteeLog = () => {
  const { id_user } = useParams();
  return (
    <div>
      <Layout>
        <h1>Rachman Kamil</h1>
      </Layout>
    </div>
  );
};

export default MenteeLog;
