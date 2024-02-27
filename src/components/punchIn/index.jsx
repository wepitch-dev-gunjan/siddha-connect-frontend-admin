import React, { useContext, useRef, useState } from 'react'
import './style.scss'
import useClickOutside from '../../customHooks/useClickOutside';
import { AttendenceContext } from '../../context/AttendenceContext';
import axios from 'axios';
import { backend_url } from '../../config';
import { toast } from 'react-toastify';

const   PunchIn = ({location}) => {
     const {setPunchInEnable} = useContext(AttendenceContext);
     const{isPunchInEnable,setIsPunchInEnable}=useContext(AttendenceContext)

    const contentRef = useRef(null);
    const address=("abc")
    // let updateLocation =location.coords;
    
    function wrapCoordinates(latitude, longitude) {
      return {
        location: {
          latitude: latitude,
          longitude: longitude,
        }
      };
    }
    const wrappedLocation = wrapCoordinates(location.coords.latitude, location.coords.longitude);
    
    
    useClickOutside(contentRef, ()=> {
        setPunchInEnable(false);
    })
    const token= localStorage.getItem("token")
    const handlePunchIn = async () => {
      setPunchInEnable(false)
      setIsPunchInEnable(!isPunchInEnable)
      
      try {
        const payload ={location:wrappedLocation,address}
        console.log( "our sdsdfsdf",location);
        
        const { data } = await axios.post(`${backend_url}/attendance`,payload,{
            headers:{
                Authorization:token
            }
        })
        console.log("punchin data",data);

        
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
