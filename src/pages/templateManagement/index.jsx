import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import { DateRangePicker } from 'rsuite';
import { toast } from 'react-toastify';
import axios from 'axios';
import { backend_url } from '../../config';
import { UserContext } from '../../context/UserContext';
import ChildFilter from './childFilter';

const TemplateManagement = () => {
  const [filters, setFilters] = useState({});
  const { user } = useContext(UserContext);

  const getChildrenRoles = async () => {
    try {
      const { data } = await axios.get(`${backend_url}/role/children-roles`, {
        headers: {
          Authorization: user.token,
        },
      });
      setFilters(data);
    } catch (error) {
      console.error(error);
      toast.error('Error fetching filter roles');
    }
  };

  const getChildren = async (parents) => {
    try {
      const { data } = await axios.get(`${backend_url}/user/children`, {
        params: {
          parents,
        },
      });
      return data;
    } catch (error) {
      console.error(error);
      toast.error('Error fetching children');
      return [];
    }
  };

  const renderChildrenFilters = (childRoles, parents) => {
    if (!childRoles) return null;

    try {
      const children = getChildren(parents);
      const nextParents = children.map((child) => child._id);
      console.log(children)
      return childRoles.map((role) => (
        <React.Fragment key={role._id}>
          <ChildFilter child={role} parents={children} />
          {renderChildrenFilters(role.children, nextParents)}
        </React.Fragment>
      ));
    } catch (error) {
      console.error(error);
      toast.error('Error rendering children filters');
      return null;
    }
  };

  useEffect(() => {
    getChildrenRoles();
  }, [user]);

  return (
    <>
      <div className="TemplateManagement-container">
        <div className="heading">
          <h2>Filters</h2>
          <DateRangePicker />
        </div>

        <div className="filters-container">
          {filters && renderChildrenFilters(filters?.children, ['65a8fc8275af01aec9f142b6'])}
        </div>
      </div>
    </>
  );
};

export default TemplateManagement;
