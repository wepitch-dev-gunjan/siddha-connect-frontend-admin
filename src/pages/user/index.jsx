import React from 'react'
import './style.scss'

import { Link } from "react-router-dom";
import "./style.scss"
import { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { backend_url } from "../../config";

const User = () => {

 
//   const { user } = useContext(UserContext)

const [users, setUsers] = useState([
    {
        name: 'anc',
        phone_number: '155545454545',
        role: 'admin'

}
])


//   const getUsers = async () => {
//     try {
//       const { data } = await axios.get(`${backend_url}/user/user-for-admin`,
//         // null,
//         {
//           headers: {
//             Authorization: user.token
//           }
//         }
//       )
//       console.log(data)
//       setUsers(data);
//     } catch (error) {
//       console.log(error);
//       // toast(error.message)
//     }
//   }
  return (
    <div className="User-container">
      <div className="heading sticky">
        <div className="row">
          <div className="col"><h4>NAME</h4></div>
          <div className="col"><h4>PHONE NUMBER</h4></div>
          <div className="col"><h4>ROLE</h4></div>
          <div className="col"><h4>PROFILE LINK</h4></div>
        </div>
      </div>
      <div className='user-table-container'>
        <div className="table">
          {users.map((user, i) => (
            <div className='row' key={i}>
              
              <div className='col'>{user.name}</div>
              <div className='col'>{user.phone_number}</div>
              <div className='col'>{user.role}</div>
              
              <div className='col'>
                <Link to={`/users/employee-profile`}>
                  <p>View Profile</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default User
