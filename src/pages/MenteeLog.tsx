import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { MenteeType } from "../utils/types/types";

const MenteeLog = () => {
  const { id_user } = useParams();
  const [cookies, setCookie] = useCookies<any>(["id", "token", "username"]);
  const [mentee, setMentee] = useState<MenteeType[]>([]);

  const token = cookies.token;

  function getMentee() {
    axios
      .get(`https://altaimmersive.site/mentees/${id_user}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMentee(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getMentee();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`https://altaimmersive.site/mentees/${id_user}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       setMentee(response.data.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  console.log(mentee);

  return (
    <div>
      <Layout>
        <div className="mx-16 my-10">
          {mentee.map((data: any, index: any) => {
            return (
              <table className="w-full">
                <tr>
                  <td className="w-2/3 text-xl">{data.name}</td>
                  <td>Phone: 0819839649202</td>
                </tr>
                <tr>
                  <td className="w-2/3">Quality Engineer Batch 8</td>
                  <td>Telegram: @rachmankamil</td>
                </tr>
                <tr>
                  <td className="w-2/3">IPA</td>
                  <td>Discord: @rachmankamil#2347</td>
                </tr>
                <tr>
                  <td className="w-2/3">SMA Negeri 4 Surabaya</td>
                  <td>Email: rachmankamil24@gmail.com</td>
                </tr>
              </table>
            );
          })}
        </div>

        <Card />
      </Layout>
    </div>
  );
};

export default MenteeLog;
