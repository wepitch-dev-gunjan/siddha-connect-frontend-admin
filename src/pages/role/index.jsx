import React, { useEffect, useState } from 'react'
import './style.scss'
import axios from 'axios';
import { backend_url } from "../../config";
import { toast } from 'react-toastify';
import RolesDropDown from '../../components/rolesDropDown';

const Role = () => {
  const [roles, setRoles] = useState([]);
  const [roleName, setRoleName] = useState();
  const [parents, setParents] = useState([]);
  const [children, setChildren] = useState([]);

  
  const getRoles = async () => {
    try {
      const { data } = await axios.get(`${backend_url}/role`);
      setRoles(data);
    } catch (error) {
      toast(error.response.data.error)
      console.log(error)
    }
  }

  const handleAddRole = async () => {
    try {
      const { data } = await axios.post(`${backend_url}/role`, {
        role_name: roleName,
        parents,
        children
      });

      console.log('API Response:', data);
      toast(`Role ${data.role.name} Successfully Created!`)
    } catch (error) {
      toast(error.response.data.error);
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    getRoles();
  }, [])

  useEffect(() => {
    console.log(children)
  }, [children])
  return (
    <div className="RoleGeneration-container">
      <div className="role-container">
        <div className="roleHeading">
          <h3>Add New Role</h3>
        </div>
      <div className="role-name">
        <label>Role Name*:</label>
        <input type="text" onChange={(e) => setRoleName(e.target.value)} value={roleName} />
      </div>
     <RolesDropDown recommended roles={roles} label='Parent roles' onSelect={(data) => setParents(data)}/>
     <RolesDropDown recommended roles={roles} label='Children roles' onSelect={(data) => setChildren(data)} />
      <div className="role-button" onClick={handleAddRole}>
        Add Role
      </div>
      </div>
    </div>
  )
}

export default Role
