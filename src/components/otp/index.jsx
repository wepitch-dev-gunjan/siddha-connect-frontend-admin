import React from 'react'
import './style.scss'
import { MuiOtpInput } from 'mui-one-time-password-input'

const Otp = ({ otp, setOtp }) => {
  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  return (
    <MuiOtpInput value={otp} onChange={handleChange} />
  )
}

export default Otp;