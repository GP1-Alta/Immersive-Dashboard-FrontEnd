import React, { useState } from "react";
import Layout from "../components/Layout";

import { BsSearch, BsBookFill } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MenteeList = () => {
  const [tabelOpen, setTabelOpen] = useState(false);

  const handleTable = () => {
    setTabelOpen(!tabelOpen);
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
            <Link to={"/AddMentee"} className="btn bg-[#19345E]">
              Add New
            </Link>
          </div>
          <div className="flex gap-3 justify-end mr-5 mt-5">
            <button className="btn bg-[#19345E]">Export</button>
            <select className="select w-50 max-w-xs">
              <option disabled selected>
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select className="select w-50 max-w-xs">
              <option disabled selected>
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select className="select w-50 max-w-xs">
              <option disabled selected>
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <button className="btn bg-[#19345E]">Filter</button>
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
                <tr>
                  <th>1</th>
                  <td>Rachman Kamil</td>
                  <td>BE 7</td>
                  <td>Active</td>
                  <td>IT</td>
                  <td>Male</td>
                  <td>
                    <BsBookFill />
                  </td>
                  <td className="flex gap-3">
                    <a href="">
                      <AiFillEdit size={25} />
                    </a>
                    <a href="">
                      <AiFillDelete size={25} />
                    </a>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>1</th>
                  <td>Rachman Kamil</td>
                  <td>BE 7</td>
                  <td>Active</td>
                  <td>IT</td>
                  <td>Male</td>
                  <td>
                    <BsBookFill />
                  </td>
                  <td className="flex gap-3">
                    <a href="">
                      <AiFillEdit size={25} />
                    </a>
                    <a href="">
                      <AiFillDelete size={25} />
                    </a>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>1</th>
                  <td>Rachman Kamil</td>
                  <td>BE 7</td>
                  <td>Active</td>
                  <td>IT</td>
                  <td>Male</td>
                  <td>
                    <BsBookFill />
                  </td>
                  <td className="flex gap-3">
                    <a href="">
                      <AiFillEdit size={25} />
                    </a>
                    <a href="">
                      <AiFillDelete size={25} />
                    </a>
                  </td>
                </tr>
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
        </Layout>
      ) : (
        <Layout>
          <div className="px-3">
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
