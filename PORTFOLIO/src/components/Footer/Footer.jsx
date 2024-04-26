import React, { useEffect ,useState} from 'react'
import ReactMarkdown from 'react-markdown'
import SocialsMd from '../../assets/Socials.md'

function Footer() {
const [markdown,setMarkdown] = useState("")

useEffect(()=>{
  fetch(SocialsMd).then((info)=>info.text()).then((newInfo)=>setMarkdown(newInfo))
},[])

  return (
    <>
        <div>Footer</div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
    </>    
  )
}

export default Footer