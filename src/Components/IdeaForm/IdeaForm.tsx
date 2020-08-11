import React, { useState } from 'react'

const IdeaFrom: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <section>
      <form>
        <label htmlFor='title'>Title:</label>
        <input id='title' value={title} onChange={ event => setTitle(event.target.value) } />
        <label htmlFor='content'>Content:</label>
        <input id='content' value={content} onChange={ event => setContent(event.target.value) } />
      </form>
    </section>
  )
}

export default IdeaFrom
