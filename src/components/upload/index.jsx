import React, { useState } from 'react';
import { Uploader, Alert } from 'rsuite';
import './style.scss';
import FileUploadIcon from '@rsuite/icons/FileUpload';
import {toast} from 'react-toastify';

const validExtensions = ['.xlsx', '.xlsm', '.xlsb', '.xltx', '.xltm', '.xls', '.xlt', '.xls', '.xml', '.xlam', '.xla'];

const Upload = () => {
  const [error, setError] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleFileChange = (fileList) => {
    const invalidFiles = fileList.filter(file => !validExtensions.includes(file.name.slice(file.name.lastIndexOf('.'))));
    if (invalidFiles.length > 0) {
      toast(`Invalid file extension. Allowed extensions: ${validExtensions.join(', ')}`);
      setButtonDisabled(true);
    } else {
      setError('');
      setButtonDisabled(false);
    }
  };

  const handleUploadClick = () => {
    // Implement your file upload logic here
    // You can use the Uploader's 'onUpload' or 'onSuccess' event to handle successful uploads
    // and show a success toast, but for this example, we'll just clear the error.
    setError('');
    setButtonDisabled(false);
  };

  return (
    <>
      <div className="upload-container">
        <div className="heading">
          <h3>Upload files in the below area</h3>
        </div>
        <Uploader
          action="//jsonplaceholder.typicode.com/posts/"
          draggable
          onChange={handleFileChange}
        >
          <div style={{ height: 500, width: 500, display: 'flex',cursor: 'pointer', alignItems: 'center', justifyContent: 'center', background: 'whitesmoke' }}>
            <div className="upload-area">
              <span>
                <FileUploadIcon style={{ fontSize: 100 }} />
                <p>Click and drag to upload files</p>
                <p>.xlsx, .xlsm, .xlsb, .xltx, .xltm, .xls, .xlt, .xls, .xml, .xlam, .xla</p>
              </span>
            </div>
          </div>
        </Uploader>
        <div className="buttons">
          <button className='file-buttons' onClick={handleUploadClick}  disabled={isButtonDisabled}>Upload</button>
        </div>
      </div>
      {error && (toast(error))}
    </>
  );
}

export default Upload;
