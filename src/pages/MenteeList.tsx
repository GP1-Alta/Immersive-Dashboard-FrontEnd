import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

import { BsSearch, BsBookFill } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";

const MenteeList = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [tabelOpen, setTabelOpen] = useState(false);
  const [cookies, setCookie] = useCookies<any>(["id", "token", "username"]);
  const [mentees, setMentees] = useState([]);
  const [classList, setClassList] = useState<any>([]);
  const [statusList, setStatusList] = useState<any>([]);
  const [search, setSearch] = useState<any>([]);
  const [category, setCategory] = useState<any>([]);
  const [status, setStatus] = useState<any>([]);
  const [classes, setClasses] = useState<any>([]);
  const [page, setPage] = useState<any>(1);
  const [dataUser, setDataUser] = useState<any>("");
  const [isDeleted, setIsDeleted] = useState(false)



  useEffect(() => {
    async function change () {
      
      setIsDeleted(location?.state?.change)
      const result = await isAlert();
    }
    change()
  },[location?.state?.change])

  useEffect(() => {
    setDataUser(cookies.username);
  }, []);

  const handleTable = () => {
    setTabelOpen(!tabelOpen);
  };

  const handleSearch = (e: any) => {
    setSearch(e);
  };

  const arr: any = [];
  // get all class
  useEffect(() => {
    axios
      .get("https://altaimmersive.site/classes/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setClassList(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // get all status
  useEffect(() => {
    axios
      .get("https://altaimmersive.site/status", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setStatusList(res.data.data))
      .catch((err) => err);
  }, []);



  // delete mentee
  async function deleteMentee(e: any, id: any) {
    e.preventDefault();
    axios
      .delete(`https://altaimmersive.site/mentees/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (res) => {
        console.log(res.data)
        setIsDeleted(true)
        const result = await isAlert();
      })
      .catch((err) => {
        alert("error");
      });
  };


  function isAlert() {
    return new Promise(resolve => {
      setTimeout(() => {
        setIsDeleted(false)
      }, 5000);
    });
  }

  const token = cookies.token;
  // get all mentees
  useEffect(() => {
    axios
      .get(`https://altaimmersive.site/mentees?name=${search}&page=${page}&category=${category}&status=${status}&class=${classes}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((ress) => {
        setMentees(ress.data.data);
      });
  }, [search, category, page, status, classes, deleteMentee]);

  // update mentee
  const updateMentee = (id: any) => {
    navigate('/AddMentee', {
      state: {
        id: id,
      },
    });
  };

  // detail mentee
  const detailMentee = (id: number) => {
    navigate(`/MenteeLog/${dataUser}/${id}`);
  };

  return (
    <div>
      {/* deleted success */}
      {isDeleted ?
        <div className="alert alert-success shadow-lg absolute z-[100]">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>changes have been saved!</span>
          </div>
        </div> : ''}
      {screen.width > 767 ? (
        <Layout>
          <div className="flex items-center justify-end mr-5 mt-12 gap-5">
            <input onChange={(e) => handleSearch(e.target.value)} type="text" placeholder="Type here" className="input w-full max-w-[150px]" />
            <a>
              <BsSearch size={28} />
            </a>
            <Link to={"/AddMentee"} className="btn bg-[#19345E]">
              Add New
            </Link>
          </div>
          <div className="flex gap-3 justify-end mr-5 mt-5">
            {/* filter bt class */}
            <select value={classes} onChange={(e) => setClasses(e.target.value)} className="select w-50 max-w-xs" >
              <option value="" selected className="bg-gray-200 outline-none">
                All Class
              </option>
              {classList?.map((item: any, index: any) => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            {/* filter by status */}
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="select w-50 max-w-xs">
              <option value="" selected className="outline-none">
                All Status
              </option>
              {statusList?.map((item: any, index: any) => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            {/* filter by category */}
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="select w-50 max-w-xs">
              <option value="" selected>
                All Category
              </option>
              <option value="Informatics">Informatics</option>
              <option value="Non-Informatics">Non-Informatics</option>
            </select>
          </div>
          <div className="overflow-x-auto mx-5 my-10">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Status</th>
                  <th>Category</th>
                  <th>Gender</th>
                  <th>Detail</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {mentees?.map((item: any, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.class}</td>
                      <td>{item.status}</td>
                      <td>{item.category}</td>
                      <td>{item.sex}</td>
                      <td>
                        <BsBookFill size={25} onClick={() => detailMentee(item.id)} className='cursor-pointer' />
                      </td>
                      <td className="flex gap-3">
                        <span className="text-green-600 cursor-pointer">
                          <AiFillEdit size={25} onClick={() => updateMentee(item.id)} />
                        </span>
                        <a href="">
                          <AiFillDelete className="text-red-600 cursor-pointer" size={25} onClick={(e) => deleteMentee(e, item.id)} />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex gap-10 justify-end mr-5">
            <button onClick={page > 1 ? () => setPage(page - 1) : () => setPage(page)} className="btn bg-[#19345E] flex gap-2">
              <GrPrevious /> Prev
            </button>
            <button onClick={() => setPage(page + 1)} className="btn bg-[#19345E] flex gap-2">
              Next <GrNext />
            </button>
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className="px-3 pt-12">
            <div className="flex items-center mr-5 mt-12 gap-5">
              <button className="w-24 h-8 text-white text-sm rounded-md bg-orange">Add New</button>
              <div className="flex flex-row justify-center items-center gap-2 border-black border-2 px-3 py-2 rounded-lg ">
                <input type="text" placeholder="Type here" className="bg-transparent outline-none w-32 max-w-xs" />
                <BsSearch size={20} />
              </div>
            </div>
            <div className="flex gap-3  mr-5 mt-5">
              <button className="w-24 text-md text-white rounded-md bg-orange">Filter</button>
              <select className=" w-26 max-w-xs">
                <option disabled selected>
                  Class
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <select className=" w-26 max-w-xs">
                <option disabled selected>
                  Status
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <select className="w-26 max-w-xs">
                <option disabled selected>
                  Status
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
            </div>
            <div className="mt-8">
              <table className={`${tabelOpen ? "h-fit" : "h-12"} w-full duration-300 relative overflow-hidden border-t border-black py-2 flex flex-col gap-3 `}>
                <IoIosArrowDropdownCircle onClick={handleTable} className="absolute ml-4 text-2xl text-orange" />
                <tr className="w-full pl-16">
                  <td className="w-80 text-start  ">Name</td>
                  <td className="w-1/2">arbi kustia</td>
                </tr>
                <tr className="w-full pl-16">
                  <td className="w-80 text-start  ">Class</td>
                  <td className="w-1/2">arbi kustia</td>
                </tr>
                <tr className="w-full pl-16">
                  <td className="w-80 text-start  ">Status</td>
                  <td className="w-1/2">arbi kustia</td>
                </tr>
                <tr className="w-full pl-16">
                  <td className="w-80 text-start  ">Category</td>
                  <td className="w-1/2">arbi kustia</td>
                </tr>
                <tr className="w-full pl-16">
                  <td className="w-80 text-start  ">Gender</td>
                  <td className="w-1/2">arbi kustia</td>
                </tr>
                <tr className="w-full pl-16">
                  <td className="w-80 text-start  ">Detail</td>
                  <td className="w-1/2 text-lg text-blue">
                    <BsFillJournalBookmarkFill />
                  </td>
                </tr>
                <div className="flex justify-end px-5 text-lg gap-4">
                  <FiEdit className="text-green-800" /> <MdDeleteForever className="text-red-500" />
                </div>
              </table>
            </div>
          </div>
        </Layout>
      )}
    </div>
  );
};

export default MenteeList;
