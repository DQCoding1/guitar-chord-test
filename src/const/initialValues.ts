import { amountOfQuestions, checkboxesChords } from "../interfaces/interfaces";
import {
  minorChords,
  minor7Chords,
  minorMaj7Chords,
  halfDimChords,
  dimChords,
  majorChords,
  major7Chords,
  majorMaj7Chords,
  augChords,
} from "../const/chords";

export const initialCheckboxesInFalse: checkboxesChords = {
  minor: [false, minorChords],
  minor7: [false, minor7Chords],
  minorMaj7: [false,minorMaj7Chords],
  halfDiminished: [false, halfDimChords],
  diminished: [false, dimChords],
  major: [false, majorChords],
  major7: [false,major7Chords],
  majorMaj7: [false, majorMaj7Chords],
  augmented: [false, augChords]
};

export const initialCheckboxesInTrue: checkboxesChords = {
  minor: [true, minorChords],
  minor7: [true, minor7Chords],
  minorMaj7: [true,minorMaj7Chords],
  halfDiminished: [true, halfDimChords],
  diminished: [true, dimChords],
  major: [true, majorChords],
  major7: [true,major7Chords],
  majorMaj7: [true, major7Chords],
  augmented: [true, augChords]
};

export const initialAmountOfQuestions: amountOfQuestions = {
  amount: "5",
};
