import React from 'react'
import './style.scss'

const EmployeeProfile = () => {

  return (
    <div className="EmployeeProfile-container">
        <div className="name">
            <h2>Naman</h2>
        </div>
        <div className="EmployeeInfo-container">
      <div className="heading">
        <h2>Basic info</h2>
      </div>
      <div className="info">
        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Phone no.</p>
            </div>
            <div className="info-value">
                <p>+91-9898785457</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="info-field">
              <p>Role</p>
            </div>
            <div className="info-value">
                <p>ADMIN</p> 
            </div>
          </div>
        </div>
        
      </div>
    </div >
  </div>
  )
}

export default EmployeeProfile
