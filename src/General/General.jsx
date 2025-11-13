import React, { useState } from 'react'

const General = ({ name, setName, email, setEmail, phone, setPhone }) => {




    
  return (
        <div className='general-info-table'>
        <h1 className='general-info-table-heading'>
            General Information
        </h1>

        <div className='general-info-table-details'>
            <label>
            Name:<input type="text" value={name} placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
            </label>
            <br/>
            <br/>


            <label>
            Email:
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
            </label>
            <br/>
            <br/>

            <label>
                Phone:
                <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}  placeholder='Enter your phone number' />
            </label>

        </div>




    </div>
  )
}

export default General