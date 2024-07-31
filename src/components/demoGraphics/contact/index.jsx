import React, { useState } from 'react'
import { IoMdContact } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { CiMobile4 } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import"./style.scss"




const data = [
    {id:1, icon: <RiContactsFill/>, data:"Mr. Pankaj Thaneja"},
    {id:2, icon: <IoPeople/>, data:"Proprietor"},
    {id:3, icon: <FaMobileScreenButton/>, data:"9999222255"},
    {id:4, icon: <CiMobile4/>, data:"1245789865"},
    {id:5, icon: <IoMdMail/>, data:"Xyz@gmail.com"},

]
console.log(data);
const ContactInfo = () => {
  return (
    <div className="contact-head">
        <div className='contact-details'>
            <div style={{fontSize:"1.2rem", lineHeight:"2px", paddingRight:"5px"}}> <IoMdContact style={{}}/></div> <h3 className='h2'>Contact Details</h3>
        </div>
        <div className='details'>
            <ul className='l'>
                {data.map ((x)=>{
                    return(
                       <div className='list-details'>

                        <li className='icon'>{x.icon}</li>
                        <li>{x.data}</li>
                       </div>   
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default ContactInfo
