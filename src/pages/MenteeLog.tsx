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
  const [dataStatus, setDataStatus] = useState<any>([]);
  const [dataLog, setDataLog] = useState<any>([]);
  const [status, setStatus] = useState<any>();
  const [feedback, setFeedback] = useState<string>("");
  const idStatus = parseInt(status);

  const token = cookies.token;

  useEffect(() => {
    axios
      .get(`https://altaimmersive.site/mentees/${id_user}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = [];
        data.push(response.data.data);
        setMentee(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://altaimmersive.site/status`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setDataStatus(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://altaimmersive.site/mentees/${id_user}/logs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setDataLog(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addNewLog = () => {
    axios
      .post(
        `https://altaimmersive.site/mentees/${id_user}/logs`,
        {
          status_id: idStatus,
          feedback: `${feedback}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearData = () => {
    setStatus("");
    setFeedback("");
  };

  console.log(mentee);

  return (
    <div>
      <Layout>
        <div className="mx-16 my-10">
          {mentee?.map((data: any, index: any) => {
            return (
              <table className="w-full">
                <tr>
                  <td className="w-2/3 text-xl">{data.name}</td>
                  <td>Phone: {data.phone}</td>
                </tr>
                <tr>
                  <td className="w-2/3">{data.class}</td>
                  <td>Telegram: {data.telegram}</td>
                </tr>
                <tr>
                  <td className="w-2/3">{data.major}</td>
                  <td>Discord: {data.discord}</td>
                </tr>
                <tr>
                  <td className="w-2/3">{data.institution}</td>
                  <td>Email: {data.email}</td>
                </tr>
              </table>
            );
          })}
        </div>
        <div className="flex justify-end my-2 mr-16">
          <label htmlFor="my-modal-4" className="btn bg-[#19345E]">
            Add New
          </label>
        </div>
        {dataLog.map((data: any) => (
          <Card status={data.status} feedback={data.feedback} />
        ))}

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative w-screen" htmlFor="">
            <h3 className="text-lg font-bold text-center mb-5">Add New Log</h3>
            <form action="">
              <table className="w-full">
                <tr>
                  <td>
                    <label className="label">
                      <span className="label-text">Status</span>
                    </label>
                  </td>
                  <td>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} className="mb-3 select select-bordered w-full max-w-xs">
                      {dataStatus?.map((data: any, index: any) => {
                        return (
                          <option key={index} value={data.id}>
                            {data.name}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="label">
                      <span className="label-text">Feedback</span>
                    </label>
                  </td>
                  <td>
                    <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} className="textarea textarea-bordered w-full" placeholder="Feedback"></textarea>
                  </td>
                </tr>
              </table>
              <div className="grid justify-items-center w-full">
                <div className="flex w-full gap-5 justify-end">
                  <label onClick={clearData} htmlFor="my-modal-4" className="btn bg-white border-[#19345E] text-[#19345E] hover:bg-[#19345E] hover:text-white w-20 flex gap-2">
                    Cancel
                  </label>
                  <label onClick={addNewLog} htmlFor="my-modal-4" className="btn bg-[#19345E] w-20 flex gap-2">
                    Save
                  </label>
                </div>
              </div>
            </form>
          </label>
        </label>
      </Layout>
    </div>
  );
};

export default MenteeLog;
