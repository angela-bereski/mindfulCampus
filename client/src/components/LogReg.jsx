import React from 'react'
import Register from './Register'
import Login from './Login'
import '../logreg.css'
import { useState } from 'react';
const LogReg = () => {

  return (
    <div className='logRegForms'>
        <div>
            <Login  />
        </div>
        <div>
            <Register />
        </div>
    </div>
  )
}

export default LogReg