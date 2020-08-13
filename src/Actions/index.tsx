import {
  ADD_IDEA, Idea, IdeaFormTypes
} from '../types'

export const addIdea = (idea:Idea): IdeaFormTypes => ({
    type: ADD_IDEA,
    payload: idea
})
