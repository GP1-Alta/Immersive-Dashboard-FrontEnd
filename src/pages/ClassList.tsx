import React, { useState } from "react";
import Layout from "../components/Layout";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsBookFill, BsSearch } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const ClassList = () => {

  const [tabelOpen, setTabelOpen] = useState(false)

  const handleTable = () => {
    setTabelOpen(!tabelOpen)
  }
  return (
    <div>
      {screen.width > 767 ?
        <Layout>
          <div className="flex items-center justify-end mr-5 mt-20 gap-5">
            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
            <a>
              <BsSearch size={28} />
            </a>
            <button className="btn bg-[#19345E]">Add New</button>
          </div>
          <div className="overflow-x-auto mx-5 my-10">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Mentor</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Front End Engineer Batch 10</td>
                  <td>Mas Bagas</td>
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
                  <td>Front End Engineer Batch 10</td>
                  <td>Mas Bagas</td>
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
                  <td>Front End Engineer Batch 10</td>
                  <td>Mas Bagas</td>
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
        : <Layout>
          <div className="flex items-center mr-5 px-3 mt-12 gap-5">
            <button className="w-24 h-8 text-white text-sm rounded-md bg-orange">Add New</button>
            <div className="flex flex-row justify-center items-center gap-2 border-black border-2 px-3 py-2 rounded-lg ">
              <input type="text" placeholder="Type here" className="bg-transparent outline-none w-32 max-w-xs" />
              <BsSearch size={20} />
            </div>
          </div>
          <div className="mt-8">
            <table className={`${tabelOpen ? 'h-fit' : 'h-12'} w-full duration-300 relative overflow-hidden border-t border-black py-2 flex flex-col gap-3 `}>
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
      }
    </div>
  );
};

export default ClassList;
