import React from "react";
import Layout from "../components/Layout";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsBookFill, BsSearch } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";

const ClassList = () => {
  return (
    <div>
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
    </div>
  );
};

export default ClassList;
