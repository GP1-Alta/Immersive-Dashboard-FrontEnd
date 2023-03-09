import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsBookFill, BsSearch } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { ClassType, MentorType } from "../utils/types/types";

const ClassList = () => {
  const [tabelOpen, setTabelOpen] = useState(false);
  const [cookies, setCookie] = useCookies<any>(["id", "token"]);
  const [dataClass, setDataClass] = useState<ClassType[]>([]);
  const [dataMentor, setDataMentor] = useState<MentorType[]>([]);
  const [id, setId] = useState<number>();
  const [name, setName] = useState<string>("");
  const [mentor, setMentor] = useState<string>("");
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");

  const handleTable = () => {
    setTabelOpen(!tabelOpen);
  };

  // handle input add user
  const addName = (e: any) => {
    setName(e);
    console.log(name);
  };

  const addMentor = (e: any) => {
    setMentor(e);
    console.log(mentor);
  };

  const addStart = (e: any) => {
    setStart(e);
    console.log(start);
  };

  const addEnd = (e: any) => {
    setEnd(e);
    console.log(end);
  };

  const token = cookies.token;

  function fetchData() {
    axios
      .get("https://altaimmersive.site/classes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDataClass(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getMentor() {
    axios
      .get("https://altaimmersive.site/mentors", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { name } = response.data.data;
        setDataMentor(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const addNewClass = () => {
    axios
      .post("https://altaimmersive.site/classes", {
        name: `${name}`,
        mentor: `${mentor}`,
        start_date: `${start}`,
        end_date: `${end}`,
      })
      .then((res) => {
        console.log(res.data);
        axios
          .get("https://altaimmersive.site/mentors", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            const { name } = response.data.data;
            setDataMentor(response.data.data);
            console.log(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  useEffect(() => {
    getMentor();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const deleteClass = (id: any) => {
    axios
      .delete(`https://altaimmersive.site/classes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response.data));
  };

  return (
    <div>
      {screen.width > 767 ? (
        <Layout>
          <div className="flex items-center justify-end mr-5 mt-20 gap-5">
            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
            <a>
              <BsSearch size={28} />
            </a>
            <label htmlFor="my-modal-4" className="btn bg-[#19345E]">
              Add New
            </label>
          </div>
          <div className="overflow-x-auto mx-5 my-10">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Mentor</th>
                  <th>Start</th>
                  <th>End</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {dataClass.map((data, index) => {
                  return (
                    <tr key={index}>
                      <th>{index}</th>
                      <td>{data.name}</td>
                      <td>{data.mentor}</td>
                      <td>{data.start_date}</td>
                      <td>{data.end_date}</td>
                      <td className="flex gap-3">
                        <a href="">
                          <AiFillEdit size={25} />
                        </a>
                        <div onClick={() => deleteClass(data.id)}>
                          <AiFillDelete size={25} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex gap-10 justify-end mr-5">
            <button className="btn bg-[#19345E] flex gap-2">
              <GrPrevious /> Prev
            </button>
            <button className="btn bg-[#19345E] flex gap-2">
              Next <GrNext />
            </button>
          </div>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative w-screen" htmlFor="">
              <h3 className="text-lg font-bold text-center mb-5">Add Class</h3>
              <form>
                <table className="w-full">
                  <tr>
                    <td>
                      <label className="label">
                        <span className="label-text">Nama</span>
                      </label>
                    </td>
                    <td>
                      <input onChange={(e) => addName(e.target.value)} type="text" placeholder="Nama Kelas" className="mb-3 input input-bordered w-full max-w-xs" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label">
                        <span className="label-text">Mentor</span>
                      </label>
                    </td>
                    <td>
                      <select value={mentor} onChange={addMentor} className="mb-3 select select-bordered w-full max-w-xs">
                        {dataMentor.map((data, index) => {
                          return (
                            <option key={index} value={data.name}>
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
                        <span className="label-text">Mulai</span>
                      </label>
                    </td>
                    <td>
                      <input onChange={(e) => addStart(e.target.value)} type="date" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="label">
                        <span className="label-text">Akhir</span>
                      </label>
                    </td>
                    <td>
                      <input onChange={(e) => addEnd(e.target.value)} type="date" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
                    </td>
                  </tr>
                </table>
                <div className="grid justify-items-center w-full">
                  <div className="flex w-full gap-5 justify-end">
                    <label htmlFor="my-modal-4" className="btn bg-white border-[#19345E] text-[#19345E] hover:bg-[#19345E] hover:text-white w-20 flex gap-2">
                      Cancel
                    </label>
                    <label htmlFor="my-modal-4" onClick={addNewClass} className="btn bg-[#19345E] w-20 flex gap-2">
                      Save
                    </label>
                  </div>
                </div>
              </form>
            </label>
          </label>
        </Layout>
      ) : (
        <Layout>
          <div className="flex items-center mr-5 px-3 mt-12 gap-5">
            <button className="w-24 h-8 text-white text-sm rounded-md bg-orange">Add New</button>
            <div className="flex flex-row justify-center items-center gap-2 border-black border-2 px-3 py-2 rounded-lg ">
              <input type="text" placeholder="Type here" className="bg-transparent outline-none w-32 max-w-xs" />
              <BsSearch size={20} />
            </div>
          </div>
          <div className="mt-8">
            <table className={`${tabelOpen ? "h-fit" : "h-12"} w-full duration-300 relative overflow-hidden border-t border-black py-2 flex flex-col gap-3 `}>
              <IoIosArrowDropdownCircle onClick={handleTable} className="absolute ml-4 text-2xl text-orange" />
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Name</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Mentor</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Start Date</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">End Date</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <div className="flex justify-end px-5 text-lg gap-4">
                <FiEdit className="text-green-800" /> <MdDeleteForever className="text-red-500" />
              </div>
            </table>
          </div>
        </Layout>
      )}
    </div>
  );
};

export default ClassList;
