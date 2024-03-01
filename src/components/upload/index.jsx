import React, { useContext, useState } from 'react';
import { Uploader} from 'rsuite';
import './style.scss';
import FileUploadIcon from '@rsuite/icons/FileUpload';
import { toast } from 'react-toastify';
import { backend_url } from '../../config';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';

const validExtensions = ['.xlsx', '.xlsm', '.xlsb', '.xltx', '.xltm', '.xls', '.xlt', '.xls', '.xml', '.xlam', '.xla'];

const Upload = () => {
  const [error, setError] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [file, setFile] = useState([])
  const { user } = useContext(UserContext)

  const handleFileChange = (fileList) => {
    console.log(fileList)
    const invalidFiles = fileList.filter(file => !validExtensions.includes(file.name.slice(file.name.lastIndexOf('.'))));
    if (invalidFiles.length > 0) {
      toast(`Invalid file extension. Allowed extensions: ${validExtensions.join(', ')}`);
      setButtonDisabled(true);
    } else {
      setError('');
      setButtonDisabled(false);
    }
  };

  const handleUploadClick = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const { data } = await axios.post(`${backend_url}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`
          // 'Content-Type': 'multipart/form-data'
        },
          withCredentials: true,
      });

      console.log(data);
      setError('');
      setButtonDisabled(false);
    } catch (error) {
      // Handle error
      console.error(error);
      setError('Error uploading file');
      setButtonDisabled(false);
    }
  };
  
  return (
    <>
      <div className="upload-container">
        <div className="heading">
          <h3>Upload files in the below area</h3>
        </div>
        <Uploader
          draggable
          onChange={handleFileChange}
        >
          <div style={{ height: 500, width: 500, display: 'flex', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', background: 'whitesmoke' }}>
            <div className="upload-area">
              <span>
                <FileUploadIcon style={{ fontSize: 100 }} />
                <p>Click and drag to upload files</p>
                <p>Allowed extensions:</p>
                <p>.xlsx, .xlsm, .xlsb, .xltx, .xltm, .xls, .xlt, .xls, .xml, .xlam, .xla</p>
              </span>
            </div>
          </div>
        </Uploader>
        <input type="file" value={file} onChange={(e) => {
          setFile(e.target.value)
          console.log(e.target)
        }} />
        <div className="buttons">
          <button className='file-buttons' onClick={handleUploadClick} disabled={isButtonDisabled}>Upload</button>
        </div>
      </div>
      {error && (toast(error))}
    </>
  );
}

export default Upload;
