import React from 'react'
import { connect  } from 'react-redux'
import {appState, Idea} from '../types'

const IdeaList = ({ ideas }: {ideas: Idea[]}) => {
  console.log(ideas)
  const displayIdeas = ideas.map(idea => {
    return (
      <article key={idea.id}>
        <h1>{idea.title}</h1>
        <p>{idea.content}</p>
      </article>
    )
  })

  return (
    <ul>
      {displayIdeas}
    </ul>
  )
}

const mapStateToProps = (state: appState) => {
  return state.ideas
}

export default connect(mapStateToProps)(IdeaList)
