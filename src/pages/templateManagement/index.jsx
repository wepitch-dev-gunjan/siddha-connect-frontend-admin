import React, { useState } from 'react'
import './style.scss'
import { CheckPicker, Stack } from 'rsuite';

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
      field: 'TSE',
    },
    {
      field: 'TDE',
    },
    {
      field: 'TSDFE',
    },
    {
      field: 'TSEDS',
    },
  ]);
  return (
    <>
    <div className="TemplateManagement-container">
      <div className="heading">
        <h2>Filters</h2>
      </div>

<div className="filters-container">
{filters.map((filter, i) => (
  <CheckPicker data={data} style={{ width: 224 }} />
))}
</div>

    </div>
    </>
  )
}

export default TemplateManagement
