import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import SkillsMd from '../../assets/Skills.md'

function Skills() {

  const [markdown,setMarkdown] = useState("")
  
  useEffect(()=>{
    fetch(SkillsMd).then((info)=>info.text()).then((newInfo)=>setMarkdown(newInfo))
  },[])



  return (
    <ReactMarkdown>{markdown}</ReactMarkdown>
  )
}

export default Skills