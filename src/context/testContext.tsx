import { useState, createContext } from "react";
import {
  ProviderProps,
  QuestionsState,
  SelectedChords,
  SelectedChordsState,
  amountOfQuestions,
} from "../interfaces/interfaces";

export const QuestionsContext = createContext<QuestionsState>(
  {} as QuestionsState
);

export const ChordsContext = createContext<SelectedChordsState>(
  {} as SelectedChordsState
);

export const QuestionProvider = ({ children }: ProviderProps) => {
  const [questions, setQuestions] = useState<amountOfQuestions>(
    {
      amount: 1
    }  
  );

  return (
    <QuestionsContext.Provider value={{questions, setQuestions}}>
      {children}
    </QuestionsContext.Provider>
  );
};

export const ChordsProvider = ({ children }: ProviderProps) => {
  const [chords, setChords] = useState<SelectedChords>(
    [["refreshPageWhileTest", [true, [{chord: ""}]]]]
  );

  return (
    <ChordsContext.Provider value={{chords, setChords}}>
      {children}
    </ChordsContext.Provider>
  );
};
