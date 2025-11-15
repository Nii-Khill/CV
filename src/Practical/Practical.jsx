import React, { useState } from 'react'

const Practical = ({ experiences, setExperiences, handleToggle, add}) => {


    const handleExperience = (i, key, value) => {
        const newExperiences = [...experiences]
        newExperiences[i][key] = value;
        setExperiences(newExperiences)
    }

    const handleDelete = (indexToDelete) => {
        setExperiences(prev => prev.filter((_, index) => index !== indexToDelete));
    };


    const handleChange = () => {
        setExperiences([...experiences,
        {
            companyName: "",
            positionTitle: "",
            responsibilities: "",
            dateFromToEnd: ""
        }])
    }

  





    return (
        <div className='practical-experience-detail-conatiner'>
            <h2 className='practical-experience-heading'>
                Practical Experience
            </h2>

            {experiences.map((exp, i) => (
                <div className='practical-experience-detail' key={i}>
                    <label>
                        Company Name:
                        <input type="text" value={exp.companyName} onChange={(e) => handleExperience(i, "companyName", e.target.value)} placeholder='Enter your company name' />
                    </label>
                    <br />
                    <br />

                    <label>
                        Position Title:
                        <input type="text" value={exp.positionTitle} onChange={(e) => handleExperience(i, "positionTitle", e.target.value)} placeholder='Enter your position title' />
                    </label>
                    <br />
                    <br />

                    <label>
                        Main Responsibilities:
                        <textarea 
                        value={exp.responsibilities}
                        onChange={(e) => handleExperience(i, "responsibilities", e.target.value)}
                        placeholder='Enter the main responsibilities '
                        row={4}
                        />
                    </label>
                    <br />
                    <br />

                    <label>
                        Worked From and Until :
                        <input type="text" value={exp.dateFromToEnd} 
                        onChange={(e) => handleExperience(i, "dateFromToEnd", e.target.value)}
                        placeholder='Enter the date from and until when you worked for that company'
                        />
                    </label>
                    <br />
                    <br />


                    <button onClick={()=>handleDelete(i)}> Delete</button>
                </div>
            ))}

            <div className="button-row">
                {add ? (
                    <button onClick={() => { handleChange(); handleToggle(); }}>Add Experience</button>
                ) : (
                    <button onClick={handleToggle}>Close</button>
                )}
            </div>



        </div>
    )
}

export default Practical