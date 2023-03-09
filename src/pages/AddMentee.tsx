import axios from "axios";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate} from "react-router-dom";

const AddMentee = () => {
  const [cookies, setCookie] = useCookies<any>(['id', 'token', 'username'])
  const navigate = useNavigate()
  const [newName, setNewName] = useState('')
  const [newAdress, setNewAdress] = useState('')
  const [newHomeAdress, setNewHomeAdress] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newGender, setNewGender] = useState<any>('')
  const [newTelegram, setNewTelegram] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newDiscord, setNewDiscord] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [newClass, setNewClass] = useState('')

  const [urgentName, setUrgentName] = useState('')
  const [urgentPhone, setUrgentPhone] = useState('')
  const [urgentStatus, setUrgentStatus] = useState('')

  const [newCategory, setnewCategory] = useState('')
  const [newMajor, setNewMajor] = useState('')
  const [newInstitution, setnewInstitution] = useState('')

  console.log(newName)
  const token = cookies.token;
  const headers = {
    'Authorization': `Bearer ${token}`,
  };
  // add new mentee
  const addNewMentee = () => {
    console.log(newName)
    axios.post('https://altaimmersive.site/mentees', {
      "name": `${newName}`,
      "address": `${newAdress}`,
      "home_address":`${newHomeAdress}`,
      "email": `${newEmail}`,
      "sex": `${newGender}`,
      "telegram":`${newTelegram}`,
      "phone":`${newPhone}`,
      "discord": `${newDiscord}`,
      "status_id": 1,
      "class_id": 4,
      "emergency_name":`${urgentName}`,
      "emergency_phone":`${urgentPhone}`,
      "emergency_status":`${urgentStatus}`,
      "category": `${newCategory}`,
      "major": `${newMajor}`,
      "institution":`${newInstitution}`
    },{headers})
      .then((res) => console.log(res.data))
      navigate(`/Menteelist/${cookies.username}`)
  }

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
                <input onChange={(e) => setNewName(e.target.value)} value={newName} type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setNewAdress(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Home Address</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setNewHomeAdress(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setNewEmail(e.target.value)} type="email" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setNewGender(e.target.value)} checked={newGender == 'Male'} value='Male' type="radio" name="radio-1" className="radio" /> Male
                <input onChange={(e) => setNewGender(e.target.value)} checked={newGender == 'Female'} value='Female' type="radio" name="radio-1" className="radio" /> Female
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Telegram</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setNewTelegram(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setNewPhone(e.target.value)} type="number" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Discord</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setNewDiscord(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setNewStatus(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Class</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setNewClass(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-1/2" />
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
                <input onChange={(e) => setUrgentName(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setUrgentPhone(e.target.value)} type="number" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
              </td>
              <td>
                <select value={urgentStatus} onChange={(e) => setUrgentStatus(e.target.value)} className="select select-bordered w-1/2">
                  <option disabled selected>
                    Orang Tua
                  </option>
                  <option value='Orang Tua'>Orang Tua</option>
                  <option value='Kakek Nenek'>Kakek Nenek</option>
                  <option value='Saudara dari Orang Tua'>Saudara dari Orang Tua</option>
                </select>
              </td>
            </tr>
          </table>
          <h1>Education Data</h1>

          <table className="w-full">
            <tr>
              <td className="w-[200px]">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setnewCategory(e.target.value)} checked={newCategory == 'Informatics'} value='Informatics' type="radio" name="radio-2" className="radio" /> Informatics
                <input onChange={(e) => setnewCategory(e.target.value)} checked={newCategory == 'Non-Informatics'} value='Non-Informatics' type="radio" name="radio-2" className="radio" /> Non-Informatics
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Major</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setNewMajor(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">
                  <span className="label-text">Institution</span>
                </label>
              </td>
              <td>
                <input onChange={(e) => setnewInstitution(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-1/2" />
              </td>
            </tr>
          </table>
        </div>
        <div className="flex w-full gap-5 justify-end my-10">
          <button className="btn bg-white border-[#19345E] text-[#19345E] hover:bg-[#19345E] hover:text-white w-20 flex gap-2">Cancel</button>
          <button onClick={addNewMentee}  className="btn bg-[#19345E] w-20 flex gap-2">Save</button>
        </div>
      </Layout>
    </div>
  );
};

export default AddMentee;
