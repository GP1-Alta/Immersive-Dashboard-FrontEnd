import axios from "axios";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";

const AddMentee = () => {
  const [cookies, setCookie] = useCookies<any>(['id', 'token', 'username'])
  const navigate = useNavigate()
  const location = useLocation()
  const [newName, setNewName] = useState('')
  const [newAdress, setNewAdress] = useState('')
  const [newHomeAdress, setNewHomeAdress] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newGender, setNewGender] = useState<any>('')
  const [newTelegram, setNewTelegram] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newDiscord, setNewDiscord] = useState('')
  const [newStatus, setNewStatus] = useState('')
  let status = parseInt(newStatus)
  const [newClass, setNewClass] = useState('')
  let classes = parseInt(newClass)
  const [getStatus, setGetStatus] = useState([])
  const [getClass, setGetClass] = useState([])
  const [updateMentee, setUpdateMentee] = useState<any>([])


  const [urgentName, setUrgentName] = useState('')
  const [urgentPhone, setUrgentPhone] = useState('')
  const [urgentStatus, setUrgentStatus] = useState('')

  const [newCategory, setnewCategory] = useState('')
  const [newMajor, setNewMajor] = useState('')
  const [newInstitution, setnewInstitution] = useState('')


  const token = cookies.token;
  const headers = {
    'Authorization': `Bearer ${token}`,
  };
  // add new mentee
  const addNewMentee = (e: any) => {
    e.preventDefault()
    axios.post('https://altaimmersive.site/mentees', {
      "name": `${newName}`,
      "address": `${newAdress}`,
      "home_address": `${newHomeAdress}`,
      "email": `${newEmail}`,
      "sex": `${newGender}`,
      "telegram": `${newTelegram}`,
      "phone": `${newPhone}`,
      "discord": `${newDiscord}`,
      "status_id": status,
      "class_id": classes,
      "emergency_name": `${urgentName}`,
      "emergency_phone": `${urgentPhone}`,
      "emergency_status": `${urgentStatus}`,
      "category": `${newCategory}`,
      "major": `${newMajor}`,
      "institution": `${newInstitution}`
    }, { headers })
      .then((res) => {
        navigate(`/Menteelist/${cookies.username}`)
      })
      .catch((err) => {
        err
        alert('hasrus terisi semua nya')
      })
  }

  const closeAddMentee = () => {
    navigate(`/Menteelist/${cookies.username}`)
  }

  const required = () => {
    alert('urgen status tidak boleh kosong ')
  }

  // get all status 
  useEffect(() => {
    axios.get('https://altaimmersive.site/status', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => setGetStatus(res.data.data))
  }, [])

  // get all class 
  useEffect(() => {
    axios.get('https://altaimmersive.site/classes/list', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => setGetClass(res.data.data))
  }, [])

  const idMentee = location?.state?.id
  // get mentee by id 
  if (idMentee != null) {
    useEffect(() => {
      axios.get(`https://altaimmersive.site/mentees/${idMentee}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then((res) => {
          setNewName(res.data.data.name),
            setNewAdress(res.data.data.address)
          setNewHomeAdress(res.data.data.home_address)
          setNewEmail(res.data.data.email)
          setNewGender(res.data.data.sex)
          setNewTelegram(res.data.data.telegram)
          setNewPhone(res.data.data.phone)
          setNewDiscord(res.data.data.discord)
          setNewStatus(res.data.data.status_id)
          setNewClass(res.data.data.class_id)
          setUrgentName(res.data.data.emergency_name)
          setUrgentPhone(res.data.data.emergency_phone)
          setUrgentStatus(res.data.data.emergency_status)
          setnewCategory(res.data.data.category)
          setNewMajor(res.data.data.major)
          setnewInstitution(res.data.data.institution)
        })
    }, [])
  }

  // post update mentee
  const putMentee = (e: any) => {
    e.preventDefault()
    axios.put(`https://altaimmersive.site/mentees/${idMentee}`, {
      "name": `${newName}`,
      "address": `${newAdress}`,
      "home_address": `${newHomeAdress}`,
      "email": `${newEmail}`,
      "sex": `${newGender}`,
      "telegram": `${newTelegram}`,
      "phone": `${newPhone}`,
      "discord": `${newDiscord}`,
      "status_id": status,
      "class_id": classes,
      "emergency_name": `${urgentName}`,
      "emergency_phone": `${urgentPhone}`,
      "emergency_status": `${urgentStatus}`,
      "category": `${newCategory}`,
      "major": `${newMajor}`,
      "institution": `${newInstitution}`
    }, { headers })
      .then((res) => {
        navigate(`/Menteelist/${cookies.username}`)
      })
      .catch((err) => {
        err
        alert('hasrus terisi semua nya')
      })
  }


  return (
    <div>
      <Layout>
        <form action="">
          <div className="my-10 mx-10">
            <table className="w-full">
              <tr className="">
                <td className="w-[200px]">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                </td>
                <td>
                  <input onChange={(e) => setNewName(e.target.value)} value={newName} type="text" placeholder="Type here" className="input input-bordered w-1/2" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                </td>
                <td>
                  <input onChange={(e) => setNewAdress(e.target.value)} value={newAdress} type="text" placeholder="Type here" className="input input-bordered w-1/2" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Home Address</span>
                  </label>
                </td>
                <td>
                  <input onChange={(e) => setNewHomeAdress(e.target.value)} value={newHomeAdress} type="text" placeholder="Type here" className="input input-bordered w-1/2" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                </td>
                <td>
                  <input onChange={(e) => setNewEmail(e.target.value)} value={newEmail} type="email" placeholder="Type here" className="input input-bordered w-1/2" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                </td>
                <td>
                  <input onChange={(e) => setNewGender(e.target.value)} checked={newGender == 'Male'} value={`${idMentee ? newGender : 'Male'}`} type="radio" name="radio-1" className="radio" required /> Male
                  <input onChange={(e) => setNewGender(e.target.value)} checked={newGender == 'Female'} value={`${idMentee ? newGender : 'Female'}`} type="radio" name="radio-1" className="radio" required /> Female
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Telegram</span>
                  </label>
                </td>
                <td>
                  <input onChange={(e) => setNewTelegram(e.target.value)} value={newTelegram} type="text" placeholder="Type here" className="input input-bordered w-1/2" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                </td>
                <td>
                  <input onChange={(e) => setNewPhone(e.target.value)} value={newPhone} type="number" placeholder="Type here" className="input input-bordered w-1/2" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Discord</span>
                  </label>
                </td>
                <td>
                  <input onChange={(e) => setNewDiscord(e.target.value)} value={newDiscord} type="text" placeholder="Type here" className="input input-bordered w-1/2" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Status</span>
                  </label>
                </td>
                <td>
                  <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)} className="select select-bordered w-1/2" required>
                    <option value='' disabled selected>
                      Status
                    </option>
                    {getStatus?.map((item: any, index: any) => {
                      return (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      )
                    })}
                  </select>
                  {/* <input onChange={(e) => setNewStatus(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-1/2" required /> */}
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Class</span>
                  </label>
                </td>
                <td>
                  <select value={newClass} onChange={(e) => setNewClass(e.target.value)} className="select select-bordered w-1/2" required>
                    <option value='' disabled selected>
                      Class
                    </option>
                    {getClass?.map((item: any, index: any) => {
                      return (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      )
                    })}
                  </select>
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
                  <input onChange={(e) => setUrgentName(e.target.value)} value={urgentName} type="text" placeholder="Type here" className="input input-bordered w-1/2" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                </td>
                <td>
                  <input onChange={(e) => setUrgentPhone(e.target.value)} value={urgentPhone} type="number" placeholder="Type here" className="input input-bordered w-1/2" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Status</span>
                  </label>
                </td>
                <td>
                  <select value={urgentStatus == '' ? 'Orang Tua' : urgentStatus} onChange={(e) => setUrgentStatus(e.target.value)} className="select select-bordered w-1/2" required>
                    <option value='' selected>
                      Status
                    </option>
                    <option value='Orang Tua'>Orang Tua</option>
                    <option value='Kakek Nenek' >Kakek Nenek</option>
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
                  <input onChange={(e) => setnewCategory(e.target.value)} checked={newCategory == 'Informatics'} value={`${idMentee ? newCategory : 'Informatics'}`} type="radio" name="radio-2" className="radio" required /> Informatics
                  <input onChange={(e) => setnewCategory(e.target.value)} checked={newCategory == 'Non-Informatics'} value={`${idMentee ? newCategory : 'Non-Informatics'}`} type="radio" name="radio-2" className="radio" required /> Non-Informatics
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Major</span>
                  </label>
                </td>
                <td>
                  <input onChange={(e) => setNewMajor(e.target.value)} value={newMajor} type="text" placeholder="Type here" className="input input-bordered w-1/2" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label">
                    <span className="label-text">Institution</span>
                  </label>
                </td>
                <td>
                  <input onChange={(e) => setnewInstitution(e.target.value)} value={newInstitution} type="text" placeholder="Type here" className="input input-bordered w-1/2" required />
                </td>
              </tr>
            </table>
          </div>
          <div className="flex w-full gap-5 justify-end my-10">
            <button onClick={closeAddMentee} className="btn bg-white border-[#19345E] text-[#19345E] hover:bg-[#19345E] hover:text-white w-20 flex gap-2">Cancel</button>
            {idMentee
              ? <button onClick={urgentStatus == '' ? required : (e) => putMentee(e)} className="btn bg-[#19345E] w-20 flex gap-2">Save</button>
              : <button onClick={urgentStatus == '' ? required : (e) => addNewMentee(e)} className="btn bg-[#19345E] w-20 flex gap-2">Save</button>
            }
          </div>
        </form>
      </Layout>
    </div>
  );
};

export default AddMentee;
