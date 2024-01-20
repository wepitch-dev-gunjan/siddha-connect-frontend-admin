import React from 'react'
import './style.scss'
import Upload from '../../components/upload'

const FileUpload = () => {
  return (
    <div className='FileUpload-container'>
      <div className="main">
        <Upload />
      </div>
    </div>
  )
}

export default FileUpload
