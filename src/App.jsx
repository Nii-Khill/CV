import React, { useState } from 'react'
import './App.css'
import General from './General/General'
import Education from './Education/Education'
import Practical from './Practical/Practical'

const App = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [schoolName, setSchoolName] = useState("")
  const [studyTitle, setStudyTitle] = useState("")
  const [dateOfStudy, setDateOfStudy] = useState('')
  const [companyName, setCompanyName] = useState("")
  const [positionTitle, setPositionTitle] = useState("")
  const [responsibilities, setResponsibilities] = useState("")
  const [dateFromToEnd, setDateFromToEnd] = useState('')

  const[isEditing, setIsEditing] = useState(true);
  const[submitted, setSubmitted] = useState(false);


  function handleSubmitForm(e) {
    e.preventDefault();
      
    if (
    !name.trim() ||
    !email.trim() ||
    !phone.trim() ||
    !schoolName.trim() ||
    !studyTitle.trim() ||
    !dateOfStudy.trim() ||
    !companyName.trim() ||
    !positionTitle.trim() ||
    !responsibilities.trim() ||
    !dateFromToEnd.trim()
  ) {
    alert("Please fill out all fields before submitting!");
    return; 
  }
    setSubmitted(true)
    setIsEditing(false)
  }

  const handleEdit=()=>{
    setIsEditing(true);
    setSubmitted(false)

  }


  return (

    <>
      <General
        name={name} setName={setName}
        email={email} setEmail={setEmail}
        phone={phone} setPhone={setPhone}
      />
      <Education
        schoolName={schoolName} setSchoolName={setSchoolName}
        studyTitle={studyTitle} setStudyTitle={setStudyTitle}
        dateOfStudy={dateOfStudy} setDateOfStudy={setDateOfStudy}
      />

      <Practical
        companyName={companyName} setCompanyName={setCompanyName}
        positionTitle={positionTitle} setPositionTitle={setPositionTitle}
        responsibilities={responsibilities} setResponsibilities={setResponsibilities}
        dateFromToEnd={dateFromToEnd} setDateFromToEnd={setDateFromToEnd}
      />





{isEditing ? (
       <form onSubmit={handleSubmitForm}>

        <button type='submit'>Submit</button>
      </form>
):(
  <div>
    <button onClick={handleEdit}>Edit</button>
  </div>
)}

{submitted && (
       <div>
        <h2>Submitted CV</h2>

        <h3>General Information</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>

        <h3>Education</h3>
        <p><strong>School Name:</strong> {schoolName}</p>
        <p><strong>Study Title:</strong> {studyTitle}</p>
        <p><strong>Date of Study:</strong> {dateOfStudy}</p>

        <h3>Practical Experience</h3>
        <p><strong>Company Name:</strong> {companyName}</p>
        <p><strong>Position Title:</strong> {positionTitle}</p>
        <p><strong>Responsibilities:</strong> {responsibilities}</p>
        <p><strong>Duration:</strong> {dateFromToEnd}</p>

        



      </div>

      
)}


    </>
  )
}

export default App