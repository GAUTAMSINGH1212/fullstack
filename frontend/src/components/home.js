import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import Navbar from './layout/header';
import Footer from './layout/footer';

const Home = () => {
  const [message, setMessage] = useState(''); // Define state to store message

  useEffect(() => {
    axios.get('http://localhost:8000/api/register') // Use the correct API endpoint
      .then(response => {
        setMessage(response.data); // Update message state with API response data
      })
      .catch(error => {
        console.error('Error fetching the API:', error);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Home Page</h2>
        <p>Welcome to the home page!</p>
{console.log(setMessage)}
        {/* Card for displaying the API data */}
        <div className="max-w-sm mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">API Data</h3>
            {/* Display message or loading state */}
            <p>{message ? message : 'Loading data from API...'}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
