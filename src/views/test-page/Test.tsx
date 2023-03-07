import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChordsContext, QuestionsContext } from "../../context/testContext";
import { ChordInfo } from "../../const/chords";
import { routes } from "../../routes/routes";

const Test = () => {
  const [chordToFind, setChordToFind] = useState<ChordInfo>({ chord: "" });
  const [chordName, setChordName] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const { chords } = useContext(ChordsContext);
  const { questions } = useContext(QuestionsContext);
  let audio = new Audio("");
  console.log(chords);
  // console.log(questions);

  useEffect(() => {
    const randomNumForChordType = Math.floor(Math.random() * chords.length);
    const randomChordName = chords[randomNumForChordType][0];
    const randomChordType = chords[randomNumForChordType][1][1];
    let randomNumForSpecificChord = Math.floor(
      Math.random() * randomChordType.length
    );
    let randomSpecificChord = randomChordType[randomNumForSpecificChord];
    while (randomSpecificChord === chordToFind) {
      randomNumForSpecificChord = Math.floor(
        Math.random() * randomChordType.length
      );
      randomSpecificChord = randomChordType[randomNumForSpecificChord];
    }
    setChordToFind(randomSpecificChord);
    setChordName(randomChordName);
  }, [currentQuestion]);

  const chordTofind = () => {
    audio.muted = true;
    audio = new Audio(chordToFind.chord);
    audio.play();
  };

  const compareAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const elementId = (e.target as HTMLButtonElement).id;
    console.log(elementId);
    console.log(chordName);
    if (currentQuestion < Number(questions.amount)) {
      setCurrentQuestion(currentQuestion + 1);
      if (chordName === elementId) {
        console.log("correct");
        setScore(score + 10);
      } else {
        console.log("incorrect");
      }
    } else {
      const valuePerQuestion = 100 / Number(questions.amount);
      if (chordName === elementId) {
        const finalScore =
          (score / Number(questions.amount)) * 10 + valuePerQuestion;
        console.log(finalScore);
      } else {
        const finalScore = (score / Number(questions.amount)) * 10;
        console.log(finalScore);
      }
    }
  };

  const resetTest = () => {
    setScore(0);
    setCurrentQuestion(1);
    setChordName("");
    setChordToFind({ chord: "" });
  };

  return (
    <div>
      {chords[0][0] === "refreshPageWhileTest" ? (
        <div>
          You refreshed the page while you were doing the test, 
          <Link to={routes.ENTRY}>Go To Main</Link>
        </div>
      ) : (
        <div>
          <div>
            <p>
              Question {currentQuestion} of {questions.amount}
            </p>
            <p>Score: {score}</p>
          </div>
          <div>
            <div>
              <p onClick={chordTofind}>Chord to find</p>
            </div>
          </div>
          <div>Options:</div>
          <main>
            <button id="minor" onClick={compareAnswer}>
              minor
            </button>
            <button id="minor7" onClick={compareAnswer}>
              minor 7
            </button>
            <button id="minorMaj7" onClick={compareAnswer}>
              minor Maj7
            </button>
            <button id="halfDiminished" onClick={compareAnswer}>
              half diminished
            </button>
            <button id="diminished" onClick={compareAnswer}>
              diminished
            </button>
            <button id="major" onClick={compareAnswer}>
              major
            </button>
            <button id="major7" onClick={compareAnswer}>
              major 7
            </button>
            <button id="majorMaj7" onClick={compareAnswer}>
              major Maj7
            </button>
            <button id="augmented" onClick={compareAnswer}>
              augmented
            </button>
            <div onClick={resetTest}>Restart Test</div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Test;
