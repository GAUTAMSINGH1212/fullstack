// src/RegistrationForm.js
import React, { useState } from 'react';
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  console.log(formData,"yyyyyyyyyyyyyyyyyy")
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8000/api/register ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
// window.location="/"  
};

  return (
    <div className=''> 

    <Header />
   <div className='flex my-20'> 
   <div className="max-w-2xl m-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white">
   <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
   <form onSubmit={handleSubmit}>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
       <div className="mb-4">
         <label htmlFor="firstname" className="block text-gray-700 text-sm">First Name:</label>
         <input
           type="text"
           id="firstname"
           name="firstname"
           value={formData.firstname}
           onChange={handleChange}
           placeholder="Enter your first name"
           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
           required
         />
       </div>

       <div className="mb-4">
         <label htmlFor="lastname" className="block text-gray-700 text-sm">Last Name:</label>
         <input
           type="text"
           id="lastname"
           name="lastname"
           value={formData.lastname}
           onChange={handleChange}
           placeholder="Enter your last name"
           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
           required
         />
       </div>

       <div className="mb-4">
         <label htmlFor="password" className="block text-gray-700 text-sm">Password:</label>
         <input
           type="password"
           id="password"
           name="password"
           value={formData.password}
           onChange={handleChange}
           placeholder="Enter your password"
           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
           required
         />
       </div>

       <div className="mb-4">
         <label htmlFor="confirmPassword" className="block text-gray-700 text-sm">Confirm Password:</label>
         <input
           type="password"
           id="confirmPassword"
           name="confirmPassword"
           value={formData.confirmPassword}
           onChange={handleChange}
           placeholder="Confirm your password"
           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
           required
         />
       </div>

       <div className="mb-4">
         <label htmlFor="mobile" className="block text-gray-700 text-sm">Mobile Number:</label>
         <input
           type="tel"
           id="mobile"
           name="mobile"
           value={formData.mobile}
           onChange={handleChange}
           placeholder="Enter your mobile number"
           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
           required
         />
       </div>

       <div className="mb-4">
         <label htmlFor="email" className="block text-gray-700 text-sm">Email:</label>
         <input
           type="email"
           id="email"
           name="email"
           value={formData.email}
           onChange={handleChange}
           placeholder="Enter your email address"
           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
           required
         />
       </div>

     </div>

     <button type="submit" className="w-full  bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
       Register
     </button>
     
   </form>
 </div>
 </div>
 <Footer />
 </div>
  );
};

export default RegistrationForm;
