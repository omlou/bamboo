import { useState } from 'react'
import './Marked.less'
import { marked } from 'marked'
import DOMPurify from "dompurify"

// const html = marked.parse(markdownText);
function Marked() {
  const [text, setText] = useState('')
  const [safeHTML, setSafeHTML] = useState('')
  const inputChange = (e: any) => {
    setText(e.target.value)
    setSafeHTML(DOMPurify.sanitize((marked as any)(e.target.value)))
  }


  return (
    <div className='marked'>
      <div className="left">
        <textarea className='mdinput' value={text} onChange={inputChange}></textarea>
      </div>
      <div className="right" dangerouslySetInnerHTML={{ __html: safeHTML }}></div>
    </div>
  )
}

export default Marked