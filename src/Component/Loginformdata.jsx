import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginformdata() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://67286ba3270bd0b975555c01.mockapi.io/loginpage/LoginForm'
        );
        if (response.ok) {
          const result = await response.json();
          setData(result); 
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const navigate =useNavigate();
  const handleBackToLogin = () => {
    navigate('/FormTask'); 
  };
  

  return (
    <div>
      <h1>Registered Data</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>Username:</strong> {item.Username} <br />
              <strong>Password:</strong> {item.Password}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
        <button className='button' onClick={handleBackToLogin}>Back to Login</button>
    </div>
  );
}

export default Loginformdata;

