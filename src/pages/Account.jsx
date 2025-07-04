import React, { useState } from 'react';
import Sidebar from '../Components/Sections/Dashboard/Sidebar';
import DHeader from '../Components/Sections/Dashboard/DHeader';
import AccountIcon from '../assets/Account.svg';
import EditIcon from '../assets/Edit.svg';
import EyeIcon from '../assets/Eye.svg';

const Account = ({ plan = "free", setUserPlan }) => {
  const [form, setForm] = useState({
    name: 'Jaydeep',
    email: 'jkmethot@gmail.com',
    phone: '1234567890',
    password: 'password123',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [passwordFields, setPasswordFields] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [showModalPassword, setShowModalPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePasswordFieldChange = (e) => {
    setPasswordFields({ ...passwordFields, [e.target.name]: e.target.value });
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    // Add password update logic here
    setShowChangePasswordModal(false);
    setPasswordFields({ current: '', new: '', confirm: '' });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Save logic here
  };

  return (
    <div className="h-screen bg-black text-white flex">
      <Sidebar selected="Account" />
      <div className="flex-1 p-3 sm:p-4 lg:p-6 overflow-y-auto flex flex-col">
        <DHeader title="Account" icon={AccountIcon} plan={plan} setUserPlan={setUserPlan} />
        <div className="w-full rounded-3xl p-4 sm:p-6 lg:p-8 bg-[#202020] shadow-lg border border-[#23232B]  relative flex flex-col flex-grow min-h-[calc(100vh-120px)]">
          <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-400 font-['Schibsted_Grotesk']">Name</label>
                <button
                  type="submit"
                  className="block lg:hidden px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-md font-medium bg-gradient-to-r from-purple-400 via-white to-pink-300 text-black shadow font-['Schibsted_Grotesk']"
                >
                  Save
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-black text-white rounded-lg px-4 py-3 focus:outline-none font-['Schibsted_Grotesk'] text-sm sm:text-base"
                />
                <img src={EditIcon} alt="Edit" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer opacity-70" />
              </div>
              <label className="text-sm text-gray-400 mt-4 font-['Schibsted_Grotesk']">Phone Number</label>
              <div className="relative">
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-black text-white rounded-lg px-4 py-3 focus:outline-none font-['Schibsted_Grotesk'] text-sm sm:text-base"
                />
                <img src={EditIcon} alt="Edit" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer opacity-70" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-sm text-gray-400 font-['Schibsted_Grotesk']">E-Mail Address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-black text-white rounded-lg px-4 py-3 focus:outline-none font-['Schibsted_Grotesk'] text-sm sm:text-base"
                />
                <img src={EditIcon} alt="Edit" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer opacity-70" />
              </div>
              <label className="text-sm text-gray-400 mt-4 font-['Schibsted_Grotesk']">Password</label>
              <div className="flex items-center bg-black rounded-xl overflow-hidden w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="flex-1 bg-black text-white px-4 py-3 focus:outline-none border-none rounded-none font-['Schibsted_Grotesk'] text-sm sm:text-base"
                  style={{ minWidth: 0 }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="px-2 sm:px-3 py-2 text-gray-400 hover:text-white focus:outline-none border-none bg-black font-['Schibsted_Grotesk']"
                  tabIndex={-1}
                >
                  <img src={EyeIcon} alt="Show" className="w-5 h-5" />
                </button>
                <div className="h-7 w-px bg-gray-700 mx-2" />
                <button
                  type="button"
                  className="px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-400 via-white to-pink-300 text-black shadow font-['Schibsted_Grotesk'] rounded-xl mr-2 sm:mr-3 whitespace-nowrap"
                  onClick={() => setShowChangePasswordModal(true)}
                >
                  Change Password
                </button>
              </div>
            </div>
          </form>
          {showChangePasswordModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur p-4">
              <div className="bg-[#202020] rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative">
                <button 
                  className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl bg-black pl-3 pr-3 pb-2 rounded-md" 
                  onClick={() => setShowChangePasswordModal(false)}
                >
                  &times;
                </button>
                <h3 className="text-lg sm:text-xl font-semibold mb-6 font-['Schibsted_Grotesk']">Change Password</h3>
                <form onSubmit={handleUpdatePassword} className="flex flex-col gap-4">
                  <label className="text-sm text-white font-['Schibsted_Grotesk'] mb-1">Current Password</label>
                  <div className="relative">
                    <input
                      type={showModalPassword.current ? 'text' : 'password'}
                      name="current"
                      value={passwordFields.current}
                      onChange={handlePasswordFieldChange}
                      placeholder="Current Password"
                      className="bg-black text-white rounded-lg px-4 py-3 focus:outline-none font-['Schibsted_Grotesk'] w-full pr-10 text-sm sm:text-base"
                      autoComplete="current-password"
                      required
                    />
                    <img 
                      src={EyeIcon} 
                      alt="Show" 
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer opacity-70" 
                      onClick={() => setShowModalPassword(p => ({...p, current: !p.current}))} 
                    />
                  </div>
                  <label className="text-sm text-white font-['Schibsted_Grotesk'] mb-1">New Password</label>
                  <div className="relative">
                    <input
                      type={showModalPassword.new ? 'text' : 'password'}
                      name="new"
                      value={passwordFields.new}
                      onChange={handlePasswordFieldChange}
                      placeholder="New Password"
                      className="bg-black text-white rounded-lg px-4 py-3 focus:outline-none font-['Schibsted_Grotesk'] w-full pr-10 text-sm sm:text-base"
                      autoComplete="new-password"
                      required
                    />
                    <img 
                      src={EyeIcon} 
                      alt="Show" 
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer opacity-70" 
                      onClick={() => setShowModalPassword(p => ({...p, new: !p.new}))} 
                    />
                  </div>
                  <label className="text-sm text-white font-['Schibsted_Grotesk'] mb-1">Confirm New Password</label>
                  <div className="relative">
                    <input
                      type={showModalPassword.confirm ? 'text' : 'password'}
                      name="confirm"
                      value={passwordFields.confirm}
                      onChange={handlePasswordFieldChange}
                      placeholder="Confirm New Password"
                      className="bg-black text-white rounded-lg px-4 py-3 focus:outline-none font-['Schibsted_Grotesk'] w-full pr-10 text-sm sm:text-base"
                      autoComplete="new-password"
                      required
                    />
                    <img 
                      src={EyeIcon} 
                      alt="Show" 
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer opacity-70" 
                      onClick={() => setShowModalPassword(p => ({...p, confirm: !p.confirm}))} 
                    />
                  </div>
                  <div className="flex justify-end gap-3 mt-4">
                    <button 
                      type="submit" 
                      className="px-4 sm:px-6 py-2 rounded-lg bg-gradient-to-r from-purple-400 via-white to-pink-300 text-black font-semibold font-['Schibsted_Grotesk'] text-sm sm:text-base"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <div className="w-full hidden lg:flex mt-6 lg:mt-8">
            <button
              type="submit"
              className="w-full lg:w-auto px-8 lg:px-10 py-2 rounded-xl text-md font-medium bg-gradient-to-r from-purple-400 via-white to-pink-300 text-black shadow font-['Schibsted_Grotesk'] lg:ml-auto lg:self-end"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;