import React from "react";
import Layout from "../components/Layout";

import { BsSearch, BsBookFill } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const MenteeList = () => {
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
    </div>
  );
};

export default MenteeList;
