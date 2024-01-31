import React, { useContext, useRef } from 'react'
import './style.scss'
import useClickOutside from '../../customHooks/useClickOutside';
import { AttendenceContext } from '../../context/AttendenceContext';
import axios from 'axios';
import { backend_url } from '../../config';
import { toast } from 'react-toastify';

const PunchIn = () => {
     const {setPunchInEnable} = useContext(AttendenceContext);
    const contentRef = useRef(null);

    useClickOutside(contentRef, ()=> {
        setPunchInEnable(false);
    })

    const handlePunchIn = async () => {
        try {
          const { data } = await axios.put(`${backend_url}/user`);
          console.log(data)
        } catch (error) {
          toast(error.message)
          console.error("Error while saving:", error);
        }
      };

  return (
    <>
    <div className="PunchIn-container">
        <div ref={contentRef} className="content">

        <p>Your Location</p>
        <div className="location" onClick={handlePunchIn}>
            
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
