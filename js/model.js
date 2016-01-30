// @flow

export type Sentence = string

export type Id = number

export type Model = {
  sentences: Array<Sentence>,
  current: Id,
  toAdd: Sentence
}

const model: Model = {
  sentences: new Array(1).join().split(',').map((e, i) => `Sentence ${i}`),
  current: 0,
  toAdd: ''
}

export default model
