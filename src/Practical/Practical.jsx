import React, { useState } from 'react'

const Practical = ({companyName, setCompanyName, positionTitle, setPositionTitle, responsibilities, setResponsibilities, dateFromToEnd, setDateFromToEnd}) => {








    return (
        <div className='practical-experience-detail-conatiner'>
            <h2 className='practical-experience-heading'>
                Practical Experience
            </h2>

            <div className='practical-experience-detail'>
                <label>
                    Company Name:
                    <input type="text" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} placeholder='Enter your company name' />
                </label>
                <br />
                <br />

                <label>
                    Position Title:
                    <input type="text" value={positionTitle} onChange={(e)=>setPositionTitle(e.target.value)}  placeholder='Enter your position title' />
                </label>
                <br />
                <br />

                <label>
                    Main Responsibilities:
                    <input type="text" value={responsibilities} onChange={(e)=>setResponsibilities(e.target.value)}  placeholder='Enter the main responsibilities ' />
                </label>
                <br />
                <br />

                <label>
                    Worked From and Until :
                    <input type="text" value={dateFromToEnd} onChange={(e)=>setDateFromToEnd(e.target.value)}  placeholder='Enter the date from and until when you worked for that company' />
                </label>
                <br />
                <br />


            </div>
        </div>
    )
}

export default Practical