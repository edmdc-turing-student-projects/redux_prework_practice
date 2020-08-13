import { IdeasState, IdeaFormTypes, ADD_IDEA, Idea } from '../types'
import { ActionType } from 'typesafe-actions'
import { addIdea } from '../Actions/index'

const intialState: IdeasState = {
  ideas: []
}

export type IdeaActions = ActionType<typeof addIdea>

export const ideas = (state:IdeasState = intialState, action: IdeaFormTypes): IdeasState => {
  switch (action.type) {
    case ADD_IDEA:
      return {
      ideas: [...state.ideas, action.payload]
    }
    default:
      return state
  }
}
