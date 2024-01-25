import React, { useState, useEffect } from 'react';
import { CheckPicker } from 'rsuite';
import './style.scss';
import { backend_url } from '../../../config';
import axios from 'axios';
import { toast } from 'react-toastify';

const ChildFilter = ({ role, items }) => {
  const [nextRoles, setNextRoles] = useState([]);
  const [nextItems, setNextItems] = useState([]);

  useEffect(() => {
    const getNextRoles = async () => {
      try {
        const { data } = await axios.get(`${backend_url}/role/children-roles/${role._id}`);
        setNextRoles(data);
      } catch (error) {
        console.log(error);
        toast('Error fetching roles');
      }
    };

    const getNextItems = async () => {
      try {
        const { data } = await axios.get(
          `${backend_url}/user/children`, {
          params: items.map(item => item._id)
        });
        setNextItems(data);
      } catch (error) {
        console.log(error);
        toast('Error fetching roles');
      }
    };

    if (role)
      getNextRoles();
    if (items)
      getNextItems();
  }, [role, items]); // Empty dependency array ensures the functions are called only once

  const pickerData = items.map(item => ({ label: item.name, value: item.name }));

  if (!role) return <></>
  return (
    <div className="filter-container">
      <div className="left">
        {role && (
          <>
            <span>{role.name}</span>
            <CheckPicker data={pickerData} style={{ width: 224 }} />
          </>
        )}
      </div>
      {nextRoles?.map(role => (
        <ChildFilter key={role._id} role={role} items={nextItems} />
      ))}
    </div>
  );
};

export default ChildFilter;
