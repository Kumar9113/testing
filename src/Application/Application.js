import React from 'react'

function Application() {
  return (
   <>
   <form>
    <h1>
        Job application Form
    </h1>\
    <span title='close'>X</span>
    <h2 id='section'>Section</h2>
    <div>
        <img src='fgg' alt='imag'></img>

        <label htmlFor='name'>Name</label>
        <input type='text' id='name' value='Ku' onChange={()=>
        {

        }} placeholder='full name'></input>

        <label htmlFor='bio'>Bio</label>
        <input type='text' id='bio'></input>
    </div>
    <div>
        <lable htmlFor='job-location'>Job Location</lable>
        <select id='job-location'>
            <option value=''>select a country</option>
            <option value='US'>United states</option>
            <option value='GB'>United Kingdom </option>
            <option value='CA'>Canada</option>
            <option value='IN'>India</option>
            <option value='AU'>Australia</option>
        </select>
    </div>
    <div>
        <label>
            <input type='checkbox' id='terms'/>
             i agree to the terms and conditions
            
        </label>
    </div>
    <button >Submit</button>
   </form>
   </>
  )
}

export default Application
