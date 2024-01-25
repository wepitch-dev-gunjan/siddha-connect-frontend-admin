import React, { useContext, useEffect, useState } from 'react';
import { CheckPicker } from 'rsuite';
import './style.scss';
import { backend_url } from '../../../config';
import { UserContext } from '../../../context/UserContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const ChildFilter = ({ child, parents }) => {
  const { user } = useContext(UserContext);
  const [children, setChildren] = useState([]);
  const getChildren = async () => {
    console.log(parents)
    try {
      if (parents) {
        const { data } = await axios.get(
          `${backend_url}/user/children`,
          {
            params: parents
          },
          {
            headers: {
              Authorization: user.token,
            },
          }
        );
        setChildren(data.map(item => ({ label: item.name, value: item.value, ...item })))
      }
    } catch (error) {
      console.log(error);
      toast('Error fetching children');
    }
  };

  useEffect(() => {
    getChildren();
  }, [user])

  return (
    <div className="filter-container">
      <span>{child.name}</span>
      <CheckPicker data={children} style={{ width: 224 }} />
    </div>
  );
};

export default ChildFilter;