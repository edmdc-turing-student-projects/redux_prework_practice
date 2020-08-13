export const ADD_IDEA = 'ADD_IDEA'

export interface Idea {
  title: string
  content: string
  id: number
}

export interface IdeasState {
  ideas: Idea[]
}

export interface AddIdeaAction {
  type: typeof ADD_IDEA
  payload: Idea
}

export type IdeaFormTypes = AddIdeaAction

