import React, { useEffect, useState } from 'react';
import './style.scss';
import { DateRangePicker } from 'rsuite';
import { toast } from 'react-toastify';
import axios from 'axios';
import { backend_url } from '../../config';
import ChildFilter from './childFilter';

const TemplateManagement = () => {
  // const { user } = useContext(UserContext);
  const user = {
    name: "Gunjan Soral",
    role: "65ae22f87c71f76cd5dc9f25"
  }
  const [role, setRole] = useState()

  const items = [
    {
      _id: "65a8fc8275af01aec9f142b6",
      name: "Gunjan Soral"
    },
    {
      _id: "65af6ecc9b63f4af81ef3418",
      name: "Gunjan Soral 2"
    },

  ]




  // const getItems = async () => {
  //   try {
  //     const { data } = await axios.get(`${backend_url}/user/children`, {
  //       params: {
  //         parents,
  //       },
  //     });
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //     toast.error('Error fetching children');
  //     return [];
  //   }
  // };
  const getRole = async () => {
    try {
      const { data } = await axios.get(`${backend_url}/role/single-role/${user.role}`);
      setRole(data);
    } catch (error) {
      console.log(error);
      toast('Error fetching child role ' + role);
    }
  }

  useEffect(() => {
    if (!role)
      getRole();
    // getChildrenRoles();
  }, [user]);

  return (
    <>
      <div className="TemplateManagement-container">
        <div className="heading">
          <h2>Filters</h2>
          <DateRangePicker />
        </div>

        <div className="filters-container">
          {role && <ChildFilter role={role} items={items} />}
        </div>
      </div>
    </>
  );
};

export default TemplateManagement;
