import React from "react";
import Layout from "../components/Layout";

const AddMentee = () => {
  return (
    <div>
      <Layout>
        <div className="my-10 mx-10">
          <table className="w-full">
            <tr className="">
              <td className="w-[200px]">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
              </td>
              <td>
                <input type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
              </td>
              <td>
                <input type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Home Address</span>
                </label>
              </td>
              <td>
                <input type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
              </td>
              <td>
                <input type="email" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
              </td>
              <td>
                <input type="radio" name="radio-1" className="radio" checked /> Male
                <input type="radio" name="radio-1" className="radio" /> Female
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
              </td>
              <td>
                <input type="number" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
              </td>
              <td>
                <input type="number" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
          </table>
          <h1>Emergency Data</h1>

          <table className="w-full">
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
              </td>
              <td>
                <input type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
              </td>
              <td>
                <input type="number" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
              </td>
              <td>
                <select className="select select-bordered w-1/2">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </td>
            </tr>
          </table>
          <h1>Education Data</h1>

          <table className="w-full">
            <tr>
              <td className="w-[200px]">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
              </td>
              <td>
                <input type="radio" name="radio-1" className="radio" checked /> Informatics
                <input type="radio" name="radio-1" className="radio" /> Non-Informatics
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Major</span>
                </label>
              </td>
              <td>
                <input type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Graduate</span>
                </label>
              </td>
              <td>
                <input type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
          </table>
        </div>
        <div className="flex w-full gap-5 justify-end my-10">
          <button className="btn bg-white border-[#19345E] text-[#19345E] hover:bg-[#19345E] hover:text-white w-20 flex gap-2">Cancel</button>
          <button className="btn bg-[#19345E] w-20 flex gap-2">Save</button>
        </div>
      </Layout>
    </div>
  );
};

export default AddMentee;
