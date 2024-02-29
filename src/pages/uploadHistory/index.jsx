import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import axios from 'axios'
import { backend_url } from '../../config'
import { UserContext } from '../../context/UserContext'
import toast from 'react-hot-toast'

const UploadHistory = () => {

  const [data, setData] = useState([]);
const { user } = useContext(UserContext)

  const [files, setFiles] = useState([
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
    // {
    //     fileType: "asdas",
    //     name: "abc",
    //     date: "12 May 23"
    // },
])

const getFileData = async () => {
  try {
      const { data } = await axios.get(`${backend_url}/upload`, {
          headers: {
              Authorization: user.token
          },
      })
      console.log(data)
      setData(data)
  } catch (error) {
      console.log(error.message)
      toast.error(error.message, "error");
  }
}

 useEffect(() => {
    getFileData()
  }, [user]);

  return (
    <div className="Files-container">     
      <div className="heading sticky">     
        <div className="row">     
          <div className="col"><h4>FILE TYPE</h4></div>     
          <div className="col"><h4>FILE NAME</h4></div>     
          <div className="col"><h4>DATE</h4></div>     
          <div className="col"><h4>ACTION</h4></div>     
        </div>     
      </div>
      <div className='file-table-container'>
        <div className="table">
          {files.map((file, i) => (
            <div className='row' key={i}>
              <div className='col'>{file.fileType}</div>
              <div className='col'>{file.name}</div>
              <div className='col'>{file.date}</div>
              <div className='col'>
                  <p>Delete</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UploadHistory
