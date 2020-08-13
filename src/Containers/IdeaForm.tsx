import React, { useState } from 'react'
import { Idea } from '../types'
import { addIdea } from '../Actions'
import { connect, ConnectedProps } from 'react-redux'

const mapDispatch = {
  addIdea: (idea:Idea) => addIdea(idea)
}

const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

const IdeaForm = (props: PropsFromRedux) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const clearInputs = () => {
    setTitle('')
    setContent('')
  }

  const submitForm = (event:React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    const newIdea:Idea = {title, content, id: Date.now()}
    props.addIdea(newIdea)
    clearInputs()
  }

  return (
    <section>
      <form>
        <label htmlFor='title'>Title:</label>
        <input id='title' value={title} onChange={ event => setTitle(event.target.value) } />
        <label htmlFor='content'>Content:</label>
        <input id='content' value={content} onChange={ event => setContent(event.target.value) } />
        <button type='submit' onClick={(event => submitForm(event))}>Submit</button>
      </form>
    </section>
  )
}


export default connector(IdeaForm)
