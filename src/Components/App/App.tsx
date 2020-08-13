import React from 'react'
import IdeaFrom from '../../Containers/IdeaForm'
import IdeaList from '../../Containers/IdeaList'

const App: React.FC = () => {
  return (
    <div className='App'>
      <IdeaFrom />
      <IdeaList />
    </div>
  )
}

export default App
