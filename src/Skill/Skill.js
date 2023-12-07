import React, { useEffect, useState } from 'react'

function Skill(props) {
   
    const skills=['HTML','CSS','JAVACRIPT'];
    const[login,setLogin]=useState(false);
    useEffect(()=>{
    setTimeout(()=>
    {
        setLogin(true);
    },3000)},[]);
  return (
  <>
  <ul>
    {
        skills.map((skill)=>
        {
            return <li key={skill}>{skill}</li>
        })
    
    }

  </ul>
 {login ?(<button>Start Learing</button>):(<button onClick={()=>setLogin(true)}>LogIn</button>)}
  </>
  )
}

export default Skill
