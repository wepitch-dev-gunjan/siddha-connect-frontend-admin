import React, { useContext, useRef, useState } from 'react'
import './style.scss'
import useClickOutside from '../../customHooks/useClickOutside';
import { AttendenceContext } from '../../context/AttendenceContext';
import axios from 'axios';
import { backend_url } from '../../config';
import { toast } from 'react-toastify';

const PunchIn = ({location,}) => {
     const {setPunchInEnable} = useContext(AttendenceContext);
    const contentRef = useRef(null);
    const address=("abc")
    

    useClickOutside(contentRef, ()=> {
        setPunchInEnable(false);
    })
    const token= localStorage.getItem("token")
    const handlePunchIn = async () => {
      setPunchInEnable(false)
      
      try {
        const payload ={location,address}
        console.log(location);
        
        const { data } = await axios.post(`${backend_url}/attendance/`,payload,{
            headers:{
                Authorization:token
            }
        })
        console.log(data);

        
    } catch (error) {
        console.log(error);
        
    }
      };
      console.log(location);

  return (
    <>
    <div className="PunchIn-container">
        <div ref={contentRef} className="content">

        <p>Your Location</p>
        <div className="location" >
          <div className='table'>
            <div className='row'>
              <div className='col'> <strong>Latitude :</strong> </div>
              <div className='col'>{location.coords.latitude}</div>
            </div>
            <div className='row'>
              <div className='col'> <strong>Longitude :</strong>   </div>
              <div className='col'>{location.coords.longitude}</div>
            </div>
            <div className='row'>
              <div className='col'> <strong>Address :</strong>   </div>
              <div className='col'></div>
            </div>
          </div>
           


            
        </div>
        <div className="loc-btns">
         
            <div className="submit" onClick={handlePunchIn}>
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
