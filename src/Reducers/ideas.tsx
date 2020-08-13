import { appState, IdeaFormTypes, ADD_IDEA } from '../types'
import { ActionType } from 'typesafe-actions'
import { addIdea } from '../Actions/index'

export type IdeaActions = ActionType<typeof addIdea>

export const ideas = (state:appState = {ideas: []}, action: IdeaFormTypes): appState => {
  switch (action.type) {
    case ADD_IDEA:
      return {
      ideas: [...state.ideas, action.payload]
    }
    default:
      return state
  }
}
