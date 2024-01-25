import React from 'react'
import './style.scss'
import { CheckPicker } from 'rsuite'


const Role = () => {
  const data = [
    'Eugenia',
    'Bryan',
    'Linda',
    'Nancy',
    'Lloyd',
    'Alice',
    'Julia',
    'Albert',
    'Louisa',
    'Lester',
    'Lola',
    'Lydia',
    'Hal',
    'Hannah',
    'Harriet',
    'Hattie',
    'Hazel',
    'Hilda'
  ].map(item => ({ label: item, value: item }));

  return (
    <div className="RoleGeneration-container">
      <div className="role-container">
        <div className="roleHeading">
          <h3>Add New Role</h3>
        </div>
      <div className="role-name">
        <label>Role Name*:</label>
        <input type="text" />
      </div>
      <div className="parent-roles">
        <label>Parent Roles*:</label>
        <CheckPicker data={data} style={{ width: 224 }} />
      </div>
      <div className="children-roles">
        <label>Children Roles:</label>
        <CheckPicker data={data} style={{ width: 224 }} />

      </div>
      <div className="role-button">
        Add Role
      </div>
      </div>
    </div>
  )
}

export default Role
