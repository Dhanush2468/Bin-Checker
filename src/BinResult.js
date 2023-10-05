// BinResult.js
import React from 'react';
import './BinResult.css'; // Import CSS file for styling

function BinResult({ responseData }) {
  if (!responseData || !responseData.BIN) {
    return null; // Return null if responseData or BIN is undefined
  }

  const { BIN } = responseData;

  return (
    <div className='top'>
    <div className="response-box">
      <h2>Response</h2>
      <table className="response-table">
        <tbody>
          <tr>
            <td>Valid</td>
            <td>{BIN.valid.toString()}</td>
          </tr>
          <tr>
            <td>BIN</td>
            <td>{BIN.number}</td>
          </tr>
          <tr>
            <td>Brand</td>
            <td>{BIN.brand}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{BIN.type}</td>
          </tr>
          <tr>
            <td>Level</td>
            <td>{BIN.level}</td>
          </tr>
          <tr>
            <td>Currency</td>
            <td>{BIN.currency}</td>
          </tr>
        </tbody>
      </table>

      {/* Personal Information Box */}
      <div className="personal-info-box">
        <h2>Personal Information</h2>
        <table className="personal-info-table">
          <tbody>
            <tr>
              <td>Issuer Name</td>
              <td>{BIN.issuer.name}</td>
            </tr>
            <tr>
              <td>Issuer Website</td>
              <td>{BIN.issuer.website}</td>
            </tr>
            <tr>
              <td>Issuer Phone</td>
              <td>{BIN.issuer.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Country Information */}
      <div className="country-info-box">
        <h2>Country Information</h2>
        <table className="country-info-table">
          <tbody>
            <tr>
              <td>Country Name</td>
              <td>{BIN.country.name}</td>
            </tr>
            {/* Add other country information fields here */}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default BinResult;
