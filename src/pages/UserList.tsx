import React, { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsBookFill, BsSearch } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import Layout from "../components/Layout";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";

const UserList = () => {


  const [tabelOpen, setTabelOpen] = useState(false)
  const location = useLocation()
  const [cookies, setCookie] = useCookies<any>(['id', 'token'])
  const [dataUser, setDataUser] = useState([])
  const [search, setSearch] = useState([])
  const [page, setPage] = useState<any>(1)
  const [idUser, setIdUser] = useState()

  // data add user
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newTeam, setNewTeam] = useState('')
  const [newStatus, setNewStatus] = useState('')

  // handle input add user
  const addName = (e: any) => {
    setNewName(e)
  }
  const addEmail = (e: any) => {
    setNewEmail(e)
  }
  const addPassword = (e: any) => {
    setNewPassword(e)
  }
  const addTeam = (e: any) => {
    setNewTeam(e.target.value)
  }
  const addStatus = (e: any) => {
    setNewStatus(e.target.value)
  }

  const handleTable = () => {
    setTabelOpen(!tabelOpen);
  };

  // add new user
  const addNewUser = () => {

    axios.post('https://altaimmersive.site/register', {
      "name": `${newName}`,
      "email": `${newEmail}`,
      "password": `${newPassword}`,
      "team": `${newTeam}`,
      "status": `${newStatus}`
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      axios.get(`https://altaimmersive.site/users?page=${page}&key=${search}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          setDataUser(response.data.data)
        })
        .catch(error => {
          // Handle error
          console.error(error);
        });
      setNewName('')
      setNewEmail('')
      setNewPassword('')
      setNewTeam('')
      setNewStatus('')
    })
  }

  // delete user
  const deleteUser = (id: number) => {
    axios.delete(`https://altaimmersive.site/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        response
      })
  }

  const token = cookies.token;
  // get all user
  useEffect(() => {
    axios.get(`https://altaimmersive.site/users?page=${page}&key=${search}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setDataUser(response.data.data)
      })
      .catch((error) => {
        console.error(error);
      });

  }, [page, search, deleteUser])

  // get user by search 
  const handleSearch = (e: any) => {
    setSearch(e);
  };


  // update user by id
  const updateUser = (id: any) => {
    axios.get(`https://altaimmersive.site/profile/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        setIdUser(res.data.data.id)
        setNewName(res.data.data.name)
        setNewEmail(res.data.data.email)
        setNewTeam(res.data.data.team)
        setNewStatus(res.data.data.status)

      })
  };


  const saveUpdate = () => {
    axios.put(`https://altaimmersive.site/users/${idUser}`, {
      "name": `${newName}`,
      "email": `${newEmail}`,
      "password": `${newPassword}`,
      "team": `${newTeam}`,
      "status": `${newStatus}`
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => console.log(res.data))
  }

  const cleerData = () => {
    setNewName('')
    setNewEmail('')
    setNewPassword('')
    setNewTeam('')
    setNewStatus('')
  }

  return (
    <div>
      {screen.width > 767 ? (
        <Layout>
          <div className="flex items-center justify-end mr-5 mt-12 gap-5">
            <input type="text" onChange={(e) => handleSearch(e.target.value)} placeholder="Type here" className="input w-full max-w-[150px]" />
            <a>
              <BsSearch size={28} />
            </a>
            {cookies.id == 1 ? (
              <label htmlFor="my-modal-4" className="btn bg-[#19345E]">
                Add New
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="overflow-x-auto mx-5 my-10">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Fullname</th>
                  <th>Email</th>
                  <th>Team</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {dataUser.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.team}</td>
                      <td>{item.role}</td>
                      <td>{item.status}</td>
                      {cookies.id == 1 ? (
                        <td className="flex gap-6">
                          <label htmlFor="my-modal-4">
                            <AiFillEdit size={25} onClick={() => updateUser(item.id)} className="text-green-600 cursor-pointer" />
                          </label>
                          <span onClick={() => deleteUser(item.id)}>
                            <AiFillDelete size={25} className="text-red-600 cursor-pointer" />
                          </span>
                        </td>
                      ) : (
                        ""
                      )}
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
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            {/* modal add user */}
            <label className="modal-box relative w-screen" >
              <h3 className="text-lg font-bold text-center mb-5">Add User</h3>
              <table className="w-full">
                <tr>
                  <td>
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                  </td>
                  <td>
                    <input onChange={(e) => addName(e.target.value)} value={newName} type="text" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                  </td>
                  <td>
                    <input onChange={(e) => addEmail(e.target.value)} value={newEmail} type="email" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
                  </td>
                </tr>
                {idUser ? ''
                  : <tr>
                    <td>
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                    </td>
                    <td>
                      <input onChange={(e) => addPassword(e.target.value)} value={newPassword} type="password" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
                    </td>
                  </tr>
                }
                <tr>
                  <td>
                    <label className="label">
                      <span className="label-text">Team</span>
                    </label>
                  </td>
                  <td>
                    <select value={newTeam} onChange={(e) => addTeam(e)} className="mb-3 select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        Academic
                      </option>
                      <option value="Academic">Academic</option>
                      <option value="Mentor">Mentor</option>
                      <option value="People Skill">People Skill</option>
                      <option value="Placement">Placement</option>
                      <option value="Admission">Admission</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="label">

                      <span className="label-text">Status</span>
                    </label>
                  </td>
                  <td>
                    <select value={newStatus} onChange={(e) => addStatus(e)} className="mb-3 select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        Active
                      </option>
                      <option value="Active">Active</option>
                      <option value="Not-Active">Not-Active</option>
                      <option value="Deleted">Deleted</option>
                    </select>
                  </td>
                </tr>
              </table>
              <div className="grid justify-items-center w-full">
                <div className="flex w-full gap-5 justify-end">
                  <label onClick={cleerData} htmlFor="my-modal-4" className="btn bg-white border-[#19345E] text-[#19345E] hover:bg-[#19345E] hover:text-white w-20 flex gap-2">Cancel</label>
                  {idUser
                    ? <label htmlFor="my-modal-4" onClick={saveUpdate} className="btn bg-[#19345E] w-20 flex gap-2">Save</label>
                    : <label htmlFor="my-modal-4" onClick={addNewUser} className="btn bg-[#19345E] w-20 flex gap-2">Save</label>
                  }
                </div>
              </div>
            </label>
          </label>
        </Layout>
      ) : (
        <Layout>
          <div className="mt-12">
            <div className="flex items-center mr-5 px-3 mt-24  gap-5">
              {cookies.id == 1 ? <button className="w-24 h-8 text-white text-sm rounded-md bg-orange">Add New</button> : ""}

              <div className="flex flex-row justify-center items-center gap-2 border-black border-2 px-3 py-2 rounded-lg ">
                <input type="text" placeholder="Type here" className="bg-transparent outline-none w-32 max-w-xs" />
                <BsSearch size={20} />
              </div>
            </div>
            <div className="mt-12">
              <table className={`${tabelOpen ? "h-fit" : "h-12"} w-full duration-300 relative overflow-hidden border-t border-black py-2 flex flex-col gap-3 `}>
                <IoIosArrowDropdownCircle onClick={handleTable} className="absolute ml-4 text-2xl text-orange" />
                <tr className="w-full pl-16">
                  <td className="w-80 text-start  ">Fullname</td>
                  <td className="w-1/2">arbi</td>
                </tr>
                <tr className="w-full pl-16">
                  <td className="w-80 text-start  ">Email</td>
                  <td className="w-1/2">arbi kustia</td>
                </tr>
                <tr className="w-full pl-16">
                  <td className="w-80 text-start  ">Team</td>
                  <td className="w-1/2">arbi kustia</td>
                </tr>
                <tr className="w-full pl-16">
                  <td className="w-80 text-start  ">Role</td>
                  <td className="w-1/2">arbi kustia</td>
                </tr>
                <tr className="w-full pl-16">
                  <td className="w-80 text-start  ">Gender</td>
                  <td className="w-1/2">arbi kustia</td>
                </tr>
                <tr className="w-full pl-16">
                  <td className="w-80 text-start  ">Status</td>
                  <td className="w-1/2 text-lg text-blue">Active</td>
                </tr>
                {cookies.id == 1 ? (
                  <div className="flex justify-end px-5 text-2xl gap-4">
                    <FiEdit className="text-green-800" /> <MdDeleteForever className="text-red-500" />
                  </div>
                ) : (
                  ""
                )}
              </table>
              
            </div>
          </div>
        </Layout>
      )}
    </div>
  );
};

export default UserList;
