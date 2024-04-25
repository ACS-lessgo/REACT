import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import AboutMeMd from '../../assets/AboutMe.md'


function About() {
  const[markdown,setMarkdown] = useState("")

  useEffect(()=>{
    fetch(AboutMeMd).then((res)=>res.text()).then((text)=>setMarkdown(text))
  },[])

  return (
   <ReactMarkdown>{markdown}</ReactMarkdown>
  )
}

export default About