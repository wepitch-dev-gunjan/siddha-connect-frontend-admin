import React, { useContext, useRef } from 'react'
import './style.scss'
import useClickOutside from '../../customHooks/useClickOutside';
import { AttendenceContext } from '../../context/AttendenceContext';

const PunchIn = () => {
     const {setPunchInEnable} = useContext(AttendenceContext)
    const contentRef = useRef(null);
    useClickOutside(contentRef, ()=> {
        setPunchInEnable(false);
    })
  return (
    <>
    <div className="PunchIn-container">
        <div ref={contentRef} className="content">

        <p>Your Location</p>
        <div className="location">
            location...
        </div>
        <div className="loc-btns">
            <div className="submit">
                Submit
            </div>
            <div className="cancel" onClick={() => {setPunchInEnable(false)}}>
                Cancel
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default PunchIn
