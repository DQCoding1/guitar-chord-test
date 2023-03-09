import { ChordInfo } from "../const/chords";

export type key = string
export type value = [boolean, Array<ChordInfo>]
export interface indexSignature {
  [index: string]: [boolean, Array<ChordInfo>]
}
export type SelectedChords = Array<[key, value]>

export interface checkboxesChords extends indexSignature {
  minor: value,
  minor7: value
  minorMaj7: value,
  halfDiminished: value,
  diminished: value,
  major: value,
  major7: value,
  majorMaj7: value,
  augmented: value,
}

export interface amountOfQuestions {
  amount: string | number
}  

export interface SelectedChordsState {
  chords: SelectedChords,
  setChords: (data: Array<[key, value]>) => void
}

export interface QuestionsState {
  questions: amountOfQuestions,
  setQuestions: (data: amountOfQuestions) => void
}

export interface ProviderProps {
  children : React.ReactNode
}
