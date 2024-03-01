import React, { useState } from 'react'
import './style.scss'

const UploadHistory = () => {

  const [files, setFiles] = useState([
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
    {
        fileType: "asdas",
        name: "abc",
        date: "12 May 23"
    },
])

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
