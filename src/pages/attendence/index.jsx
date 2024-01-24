import React from 'react'
import './style.scss'
import AttendenceSummary from '../../components/attendenceSummary'

const Attendence = () => {
  return (
    <>
    <div className="Attendence-container">
        <div className="attendence-info">
            <div className="row">
                <div className="col">
                    <h4>Present</h4>
                    <p>2</p>
                </div>
                <div className="col">
                    <h4>Absent</h4>
                    <p>2</p>
                </div>
                <div className="col">
                    <h4>Half Day</h4>
                    <p>2</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4>Leave</h4>
                    <p>2</p>
                </div>
                <div className="col">
                    <h4>Fine</h4>
                    <p>2</p>
                </div>
                <div className="col">
                    <h4>Overtime</h4>
                    <p>2</p>
                </div>
            </div>
        </div>
        <hr />
        <div className="approval-pending">
            <p>20 Approval Pending</p>
        </div>
        <hr />
            <AttendenceSummary />          
    </div>
    </>
  )
}

export default Attendence