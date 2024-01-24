import React, { useState } from 'react'
import './style.scss'

const AttendenceSummary = () => {
    const [attendence,setAttendence] = useState([
        {
            date: "12 Jan",
            day: "Wednesday",
            status: "marked",
            time: "9 hrs"
        },
        {
            date: "12 Jan",
            day: "Wednesday",
            status: "marked",
            time: "9 hrs"
        },
        {
            date: "12 Jan",
            day: "Wednesday",
            status: "marked",
            time: "9 hrs"
        },
        {
            date: "12 Jan",
            day: "Wednesday",
            status: "marked",
            time: "9 hrs"
        },
        {
            date: "12 Jan",
            day: "Wednesday",
            status: "marked",
            time: "9 hrs"
        },
        {
            date: "12 Jan",
            day: "Wednesday",
            status: "marked",
            time: "9 hrs"
        },
    ])
  return (
    <div className="attendence-summary">
        <div className="summary-heading">
         <h4>Attendence Summary</h4>
        </div> 
        <div className="summary-info">
            {attendence.map((attend, i) => (
                <div className="whole-info" key={i}>
                    <div className="left-side">
                        <p>
                        {attend.date}
                        </p>
                        <p>
                        {attend.day}
                        </p>
                    </div>
                    <div className="right-side">
                        <p>{attend.status}</p>
                        <p>{attend.time}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="punchIn-btn">
            Punch In
        </div>
    </div>
  )
}

export default AttendenceSummary
