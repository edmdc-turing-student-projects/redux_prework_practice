const ADD_IDEA = 'ADD_IDEA'

interface Idea {
  title: string
  content: string
  id: number
}

interface AddIdeaAction {
  type: typeof ADD_IDEA
  payload: Idea
}

type IdeaFormTypes = AddIdeaAction

export const addIdea = (idea:Idea): IdeaFormTypes => ({
    type: ADD_IDEA,
    payload: idea
})
