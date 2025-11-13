import React, { useState } from 'react'

const Education = ({schoolName, setSchoolName, studyTitle, setStudyTitle, dateOfStudy, setDateOfStudy}) => {




    return (
        <div className='educational-experience-detail-container'>
            <h2 className='educational-experience-heading'>
                Educational Experience
            </h2>

            <div className='educational-experience-detail'>
                <label>
                    School Name:
                    <input type="text" value={schoolName} onChange={(e)=>setSchoolName(e.target.value)}  placeholder='Enter your school name' />
                </label>
                <br />
                <br />

                <label>
                    Title Of Study:
                    <input type="text" value={studyTitle} onChange={(e)=>setStudyTitle(e.target.value)}  placeholder='Enter your title of study' />
                </label>
                <br />
                <br />

                <label>
                    Date Of Study:
                    <input type="date" value={dateOfStudy} onChange={(e)=>setDateOfStudy(e.target.value)}  placeholder='Enter the date of study ' />
                </label>

            </div>

        </div>
    )
}

export default Education