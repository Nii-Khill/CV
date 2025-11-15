import React, { useState } from 'react'
import './App.css'
import General from './General/General'
import Education from './Education/Education'
import Practical from './Practical/Practical'
import { downloadPDF } from './pdf.js'
import { exampleData } from './example.js';

const App = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [add, setAdd] = useState(true)
  const [eduOpen, setEduOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const[exampleMode, setExampleMode]=useState(false)
  
  const [education, setEducation] = useState([{
    schoolName: "",
    studyTitle: "",
    dateOfStudy: ""
  }])
  
  const [experiences, setExperiences] = useState([{
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    dateFromToEnd: ""
  }])

const loadExampleData = () => {
  setName(exampleData.name);
  setEmail(exampleData.email);
  setPhone(exampleData.phone);
  setEducation(exampleData.education);
  setExperiences(exampleData.experiences);
  setIsEditing(false);
  setSubmitted(true);
  setExampleMode(true);
};




  function handleSubmitForm(e) {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim()

    ) {
      alert("Please fill out all fields before submitting!");
      return;
    }

    const isExperienceValid = experiences.every(exp =>
      exp.companyName.trim() &&
      exp.positionTitle.trim() &&
      exp.responsibilities.trim() &&
      exp.dateFromToEnd.trim()
    );

    if (!isExperienceValid) {
      alert("Please fill out all fields in Practical Experience before submitting!");
      return;
    }

    const isEducationDetail = education.every(edu =>
      edu.schoolName.trim() &&
      edu.studyTitle.trim() &&
      edu.dateOfStudy.trim()
    );

    if (!isEducationDetail) {
      alert("Please fill out all fields in Educational Experience before submitting!");
      return;
    }

    setSubmitted(true);
    setIsEditing(false);
  }


  const handleEdit = () => {
    setIsEditing(true);
    setSubmitted(false)

  }

  const handleToggle = () => {
    setAdd(!add)
  }

const resetForm = () => {
  setName("");
  setEmail("");
  setPhone("");
  setEducation([{ schoolName: "", studyTitle: "", dateOfStudy: "" }]);
  setExperiences([{ companyName: "", positionTitle: "", responsibilities: "", dateFromToEnd: "" }]);
  setIsEditing(true);
  setSubmitted(false);
};

const handleNormal =()=>{
  if(exampleMode){
    resetForm();
    setExampleMode(false)
  }else{
    loadExampleData();
  }
}


  return (
    <>
    

      <div className="cv-page">
          <h1 className="cv-head">Build your Cv</h1>

        {/* LEFT SIDE: Form */}
        <div className="cv-left">
          <div className="form-block">
            <General
              name={name} setName={setName}
              email={email} setEmail={setEmail}
              phone={phone} setPhone={setPhone}
            />
          </div>

          <div className="form-block">
            <Education
              education={education} setEducation={setEducation}
              add={eduOpen}
              handleToggle={() => setEduOpen(!eduOpen)}
            />
          </div>

          <div className="form-block">
            <Practical
              experiences={experiences}
              setExperiences={setExperiences}
              handleToggle={handleToggle}
              add={add}
            />
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmitForm}>
              <button type='submit'>Submit</button>
            </form>
          ) : (
            <div>
              <button onClick={handleEdit}>Edit</button>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="cv-right">

          <div className='cv-actions'>
          {submitted && (<div className="download-wrapper">
            <button className='download-btn' onClick={downloadPDF}>Download CV</button>

          </div>)}
            <button onClick={handleNormal} className='example-btn'>
              {exampleMode? "close" : "Example"}
            </button>
          
          </div>


            <div className="resume-container">

              {/* NAME */}
              <h1 className="resume-name">{name}</h1>

              {/* CONTACT LINE */}
              <div className="resume-contact">
                <span>{email}</span> •
                <span>{phone}</span> •
                <span>linkedin.com/in/{name.replace(/\s+/g, '').toLowerCase()}</span>
              </div>


              {/* EDUCATION SECTION */}
              <h2 className="resume-section-title">Education</h2>
              {education.map((edu, i) => (
                <div className="resume-row" key={i}>
                  <div>
                    <strong>{edu.schoolName}</strong><br />
                    <em>{edu.studyTitle}</em>
                  </div>
                  <div className="resume-right">{edu.dateOfStudy}</div>
                </div>
              ))}

              {/* EXPERIENCE SECTION */}
              <h2 className="resume-section-title">Experience</h2>
              {experiences.map((exp, i) => (
                <div className="resume-row" key={i}>
                  <div>
                    <strong>{exp.companyName}</strong><br />
                    <em>{exp.positionTitle}</em>
                    <ul className="resume-bullets">
                      {exp.responsibilities
                        .split('\n')
                        .filter(resp => resp.trim() !== '')
                        .map((resp, idx) => (
                          <li key={idx}>{resp.trim()}</li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="resume-right">{exp.dateFromToEnd}</div>


                </div>


              ))}

            </div>
        </div>

      </div>

    </>
  )

}

export default App