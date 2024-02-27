import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import { AttendenceContext } from '../../context/AttendenceContext'
import axios from 'axios';
import { backend_url } from '../../config';

const AttendenceSummary = () => {
    const { setPunchInEnable } = useContext(AttendenceContext);
    const [exitLocation,setExitLocation]=useState("")
    const {location , setLocation}=useContext(AttendenceContext)
    const {isPunchInEnable,setIsPunchInEnable}=useContext(AttendenceContext)
    const address=("abc")
    useEffect(() => {
        const getLocation = () => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation(position);
            },
            (error) => {
                console.error('Error getting location:', error);
            }
            );
        };
        
        getLocation();
    }, []); 
    
      useEffect(() => {
        const getLocation = () => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setExitLocation(position.coords); 

            },
            (error) => {
              console.error('Error getting location:', error);
            }
          );
        };
    
    
        getLocation();
      }, []); 
      function wrapCoordinates(latitude, longitude) {
        return {
          location: {
            latitude: latitude,
            longitude: longitude,
          }
        };
      }
      const wrappedLocation = wrapCoordinates(location.coords.latitude, location.coords.longitude);
      
      

    //   useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('items'));
    //     if (items) {
    //         setUserToken(items);
    //         console.log(userToken);
    //     }
    //   }, []);
    
    const punchIn= async()=>{
            setPunchInEnable(true);
            // setIsPunchInEnable(true);
            // setIsPunchInEnable(!isPunchInEnable)
    }
    const punchOut= async()=>{
        setPunchInEnable(false);
        setIsPunchInEnable(false);
    const token= localStorage.getItem("token")
        
        try {
            const payload ={location:wrappedLocation,address}

            const { data } = await axios.put(`${backend_url}/attendance/`, payload,{
                headers:{
                    Authorization:token
                }
            })
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
}
    // const punchIn = async () => {
    //     try {
            
    //        const payload ={enterLocation}
    //         const { data } = await axios.post (`${backend_url}/attendance`)
            
            
    //     } catch (error) {
    //         console.log(error);
            
    //     }

    // }
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
            <div className="whole-info" key={i} >
                <div className="left-side">
                    <p>{attend.date}</p>
                    <p>{attend.day}</p>
                </div>
                <div className="right-side">
                    <p>{attend.status}</p>
                    <p>{attend.time}</p>
                </div>
            </div>
        ))}
    </div >
    {isPunchInEnable ? (
        <div className="punchIn-btn" onClick={punchOut}>
        Punch Out
    </div>
    ) : (
    <div className="punchIn-btn" onClick={punchIn}>
        Punch In
    </div>
    )}
    {/* <div>
    {showInButton &&<button className="punchIn-btn" onClick={punchIn}>Punch In</button>}
    {showOutButton &&<button className="punchIn-btn" onClick={punchOut}>Punch Out</button>}
    </div> */}
</div>
  )
  }

export default AttendenceSummary
