// @flow

export type Sentence = string

export type Id = number

export type Model = {
  sentences: Array<Sentence>,
  current: Id
}

const model: Model = {
  sentences: new Array(15).join().split(',').map((e, i) => `Sentence ${i}`),
  current: 0
}

export default model
