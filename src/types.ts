export type User = any

export type Post = {
  id: string
  title: string
  body: string
}

export enum ActionState {
  NotStarted = 'NOT_STARTED',
  Started = 'STARTED',
  Finished = 'FINISHED',
  Failed = 'FAILED'
}
