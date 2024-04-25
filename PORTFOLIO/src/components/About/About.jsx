import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import AboutMeMd from '../../assets/AboutMe.md'
import Markdown from 'react-markdown'

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