import React, { useState } from 'react';
import axios from 'axios';
import BinResult from './BinResult'; // Import the BinResult component
import './BinInput.css'; // Import CSS file for styling

function BinInput() {
  const [bin, setBin] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleBinChange = (e) => {
    setBin(e.target.value);
  };

  const handleAddBin = async () => {
    setError(null);

    const options = {
      method: 'POST',
      url: 'https://bin-ip-checker.p.rapidapi.com/',
      params: { bin: bin },
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key':
          '0439e6a05bmsh0b48dc0f8dbedebp1a8fc6jsne4152f778894',
        'X-RapidAPI-Host': 'bin-ip-checker.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      setResponseData(response.data);
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please check the BIN and try again.');
    }
  };

  return (
    <div className="search-bar-container"> {/* Add a container div */}
      <input
        type="text"
        placeholder="Enter BIN"
        value={bin}
        onChange={handleBinChange}
        className="search-bar" // Use the "search-bar" class
      />

      <button onClick={handleAddBin} className="search-button">Submit</button> {/* Add "search-button" class to the button */}

      <div>
        {error && <div className="error-box">Error: {error}</div>}
      </div>

      <div>
        {responseData && (
          <div className="result-box">
            <BinResult responseData={responseData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default BinInput;
