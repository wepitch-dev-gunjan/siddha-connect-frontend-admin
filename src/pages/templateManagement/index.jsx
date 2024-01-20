import React, { useState } from 'react'
import './style.scss'
import { CheckPicker } from 'rsuite';
import { DateRangePicker, Stack } from 'rsuite';

const data = [
  'Eugenia',
  'Bryan',
  'Linda',
  'Nancy',
  'Lloyd',
  'Alice',

].map(item => ({ label: item, value: item }));

const TemplateManagement = () => {

  const [filters, setFilters] = useState([
    {
      field: 'RSM',
    },
    {
      field: 'ZSE',
    },
    {
      field: 'SEC',
    },
    {
      field: 'ZSM',
    },
    {
      field: 'RSO',
    },
    {
      field: 'ASE',
    },
    {
      field: 'ABM',
    },
    {
      field: 'BSM',
    },
    {
      field: 'ASM',
    },
    {
      field: 'TSE',
    },
  ]);
  return (
    <>
      <div className="TemplateManagement-container">
        <div className="heading">
          <h2>Filters</h2>
          <DateRangePicker />
        </div>

        <div className="filters-container">
          {filters.map((filter, i) => (
            <div className="filter-container">
              <span>{filter.field}</span>
              <CheckPicker data={data} style={{ width: 224 }} />
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default TemplateManagement
