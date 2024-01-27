import React from 'react'
import { CheckPicker } from 'rsuite'
import './style.scss'

const RolesDropDown = ({label, roles, recommended, onSelect}) => {
    const data = roles.map((item) => ({ label: item.name, value: item._id }));
  return (
    <div className="parent-roles">
         <label>{`${label}${recommended && '*'}:`}</label>
      <CheckPicker data={data} style={{ width: 224 }} onChange={(value) => onSelect(value)}/>
    </div>
  )
}

export default RolesDropDown
