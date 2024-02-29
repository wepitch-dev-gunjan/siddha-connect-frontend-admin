import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { backend_url } from '../../config';
import './style.scss'
import toast from 'react-hot-toast';
import { UserContext } from '../../context/UserContext';
import { TextField } from '@mui/material';
import { Dropdown } from 'rsuite';

const SalesDashboard = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const { user } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);

  const getSalesData = async (searchText) => {
    try {
      const { data } = await axios.get(`${backend_url}/upload`, {
        headers: {
          Authorization: user.token
        },
        params: {
          search: searchText
        }
      });
      console.log(data);
      setData(data);
      setHeaders(Object.keys(data[0] || {}).map((header) => ({ key: header, name: header })));
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, "error");
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      getSalesData(searchText);
    }
  };

  const handleFilterSelect = (value) => {
    setSelectedFilter(value);
  };

  useEffect(() => {
    getSalesData();
  }, [user]);

  return (
    <div className='SalesDashboard-container'>
      <h1>Sales Dashboard</h1>
      <div className="filter-container">
        <h2>Filters</h2>
        <div className="filter-data">
          <TextField
            sx={{ width: 800 }}
            label="Search input"
            InputProps={{
              type: 'search',
            }}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            onKeyDown={handleKeyDown}
          />
          <Dropdown
            title={selectedFilter || "Select filter"}
            onSelect={handleFilterSelect}
          >
            <Dropdown.Item eventKey="Select filter">Select filter</Dropdown.Item>
            <Dropdown.Item eventKey="Product wise">Product wise</Dropdown.Item>
            <Dropdown.Item eventKey="Channel wise">Channel wise</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <p>{data.length} Entries</p>

      <div className='sales-table' >
        <div className='row table-headings'>
          {headers.map((header, index) => (
            <div className='col' key={index}>{header.name}</div>
          ))}
        </div>
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className='row'>
            {Object.values(row).map((cell, cellIndex) => (
              <div key={cellIndex} className='col'>{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesDashboard;
