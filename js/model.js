// @flow

export type Sentence = string

export type Id = number

export type Model = {
  sentences: Array<Sentence>,
  current: Id,
  toAdd: Sentence
}

const emptyModel: Model = {
  sentences: [],
  current: 0,
  toAdd: ''
}

export default emptyModel
