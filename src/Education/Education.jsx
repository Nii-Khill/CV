import React, { useState } from 'react'

const Education = ({ education, setEducation, add, handleToggle }) => {

    const handleEducation = ((i, key, value) => {
        const newEducation = [...education]
        newEducation[i][key] = value;
        setEducation(newEducation)
    })

        const handleDelete = (indexToDelete) => {
        setEducation(prev => prev.filter((_, index) => index !== indexToDelete));
    };


    const handleChange = () => {
        setEducation([...education,
        {
            schoolName: "",
            studyTitle: "",
            dateOfStudy: ""
        }])
    }

    return (
        <div className='educational-experience-detail-container'>
            <h2 className='educational-experience-heading'>
                Educational Experience
            </h2>

            {education.map((edu, i) => (

                <div className='educational-experience-detail' key={i}>
                    <label>
                        School Name:
                        <input type="text" value={edu.schoolName} onChange={(e) => handleEducation(i, "schoolName", e.target.value)} placeholder='Enter your school name' />
                    </label>
                    <br />
                    <br />

                    <label>
                        Title Of Study:
                        <input type="text" value={edu.studyTitle} onChange={(e) => handleEducation(i, "studyTitle", e.target.value)} placeholder='Enter your title of study' />
                    </label>
                    <br />
                    <br />

                    <label>
                        Date Of Study:
                        <input type="date" value={edu.dateOfStudy} onChange={(e) => handleEducation(i, "dateOfStudy", e.target.value)} placeholder='Enter the date of study ' />
                    </label>

                    <button onClick={()=>handleDelete(i)}> Delete</button>


                </div>

            ))}

            <div className="button-row">
                {add ? (
                    <button onClick={() => { handleChange(); handleToggle(); }}>Add</button>
                ) : (
                    <button onClick={handleToggle}>Close</button>
                )}
            </div>

        </div>
    )
}

export default Education