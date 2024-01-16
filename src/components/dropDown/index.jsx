// DropDown.jsx
import React, { useState } from 'react';
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './style.less';
import { backend_url } from '../../config'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const DropDown = () => {
  const [roles, setRoles] = useState([]);

  const getRoles = async () => {
    try {
      const { data } = await axios.get(`${backend_url}/role`);
      setRoles(data);
    } catch (error) {
      console.log(error);
      toast('Error fetching roles');
    }
  }

  useEffect(() => {
    getRoles();
  }, [])

  return (
    <Dropdown title="Dropdown" className="DropDown-container" >
      {roles.map((role, i) => (
        <Dropdown.Item key={i}>{role.name}</Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default DropDown;
