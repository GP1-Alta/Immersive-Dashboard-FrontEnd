import React, { useState } from "react";
import InfoBox from "../components/InfoBox";
import Layout from "../components/Layout";
import dashboard from '../assets/dashboard.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {HiOutlineMinus } from 'react-icons/hi'

const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Layout>
      {
        screen.width > 767
          ? <div className="flex flex-col gap-24">
            <div className="w-full flex flex-row  justify-between h-56 shadow-sm bg-gray-100">
              <img src={dashboard} className='w-80 m h-aouto absolute  ' alt="" />
              <div className="bg-blue-500 ml-96 w-full flex flex-col justify-center">
                <h1 className="text-3xl font-bold">Hii...</h1>
                <p className="text-2xl font-bold w-full">you complete 75% of your profile, let's complete your profile</p>

              </div>
            </div>
            <div className="w-full h-80 flex flex-row gap-5 flex-wrap px-5 ">
              <div className="w-80 h-44 rounded-2xl flex flex-row py-8 items-center  justify-around bg-gray-100 ">
                <div className="w-1/2 h-full flex flex-col gap-5 ">
                  <h1 className="text-xl font-bold">Mentee Active</h1>
                  <p>70% Mentee Active</p>
                </div>
                {/* <div className="radial-progress bg-blue text-primary-content border-4 border-blue" style={{ "--value": 70 }}>70%</div> */}
              </div>
              <div className="w-80 h-44 rounded-2xl flex flex-row py-8 items-center  justify-around bg-gray-100 ">
                <div className="w-1/2 h-full flex flex-col gap-5 ">
                  <h1 className="text-lg font-bold">Mentee Placement</h1>
                  <p>90% Mentee Placement</p>
                </div>
                {/* <div className="radial-progress bg-blue text-primary-content border-4 border-blue" style={{ "--value": 90 }}>90%</div> */}
              </div>
              <div className="w-80 h-44 rounded-2xl flex flex-row py-8 items-center  justify-around bg-gray-100 ">
                <div className="w-1/2 h-full flex flex-col gap-5 ">
                  <h1 className="text-lg font-bold">Mentee Feedback</h1>
                  <p>40% Mentee Feedback</p>
                </div>
                {/* <div className="radial-progress bg-blue text-primary-content border-4 border-blue" style={{ "--value": 40 }}>40%</div> */}
              </div>
            </div>
          </div>
          : <div className="">
            <div className="w-full h-screen fixed mt-[60px] px-4 flex justify-center ">
              <div className="  w-full h-fit mt-5 px-5 py-5 rounded-lg" >
                <Calendar onChange={onChange} value={value} />
              </div>
            </div>
            <div className="w-full px-3 absolute items-center pt-12 flex flex-col gap-4 h-fit mt-[480px] bg-gray-100 rounded-t-lg">
              <HiOutlineMinus className="w-44 h-12 text-5xl" />
              <div className="w-full h-44 rounded-lg flex flex-row items-center justify-around bg-gray-200">
                <div className="w-1/2 h-full py-5">
                  <h1 className='font-bold mb-8'>Mentee Active </h1>
                  <p>70% Mentee Active</p>
                </div>
                {/* <div className="radial-progress bg-blue text-primary-content border-4 border-blue" style={{ "--value": 70 }}>70%</div> */}
              </div>
              <div className="w-full h-44 rounded-lg flex flex-row items-center justify-around bg-gray-200">
                <div className="w-1/2 h-full py-5">
                  <h1 className='font-bold mb-8'>Mentee Placement </h1>
                  <p>90% Mentee Placement</p>
                </div>
                {/* <div className="radial-progress bg-blue text-primary-content border-4 border-blue" style={{ "--value": 90 }}>90%</div> */}
              </div>
              <div className="w-full h-44 rounded-lg flex flex-row items-center justify-around bg-gray-200">
                <div className="w-1/2 h-full py-5">
                  <h1 className='font-bold mb-8'>Mentee Feedback </h1>
                  <p>40% Mentee Feedback</p>
                </div>
                {/* <div className="radial-progress bg-blue text-primary-content border-4 border-blue" style={{ "--value": '40' }}>40%</div> */}
              </div>
            </div>
          </div>
      }
    </Layout>
  );
};

export default Dashboard;
