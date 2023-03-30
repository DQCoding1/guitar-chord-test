import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChordsContext, QuestionsContext } from "../../context/testContext";
import { ChordInfo } from "../../const/chords";
import { routes } from "../../routes/routes";
import "./Test.css";

const Test = () => {
  const [chordToFind, setChordToFind] = useState<ChordInfo>({ chord: "" });
  const [chordName, setChordName] = useState<string>("");
  const [resultOfEachQuestion, setResultOfEachQuestion] = useState<string>("")
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);
  const [finalScoreSpan, setFinalScoreSpan] = useState<number>(0);
  const [finalScore, setFinalScore] = useState<number>(0);
  const refResultOfEachQuestion = useRef<HTMLParagraphElement>(null);
  const refFinalScorePopUp = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const { chords } = useContext(ChordsContext);
  const { questions } = useContext(QuestionsContext);
  let audio = new Audio("");

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


  useEffect(() => {
    if (finalScoreSpan < finalScore) {
      setTimeout(() => setFinalScoreSpan(finalScoreSpan + 1), 25);
    }
  }, [finalScoreSpan, finalScore]);


  const chordTofind = () => {
    loadingRef.current?.classList.add("loadingVisible")
    audio.muted = true;
    audio = new Audio(chordToFind.chord);
    audio.play()
      .then(() => loadingRef.current?.classList.remove("loadingVisible"));
  };


  const toggleClassPopUpScore = () => {
    refFinalScorePopUp.current?.classList.toggle("d-none");
  };


  const compareAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    audio.muted = true;
    const elementId = (e.target as HTMLButtonElement).id;
    if (correctAnswers + wrongAnswers < Number(questions.amount)) {
      if (chordName === elementId) {
        setCorrectAnswers(correctAnswers + 1);
        setResultOfEachQuestion(`Correct, it's ${chordName}`)
        refResultOfEachQuestion.current?.classList.add("addColorToCorrect");
        setTimeout(() => {
          refResultOfEachQuestion.current?.classList.remove(
            "addColorToCorrect"
          )
        }, 1000);
      } else {
        setWrongAnswers(wrongAnswers + 1);
        setResultOfEachQuestion(`Incorrect, it's ${chordName}`)
        refResultOfEachQuestion.current?.classList.add("addColorToWrong");
        setTimeout(() => {
          refResultOfEachQuestion.current?.classList.remove(
            "addColorToWrong"
          );
        }, 1000);
      }
    }

    if (currentQuestion < Number(questions.amount)) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const valuePerQuestion = 100 / Number(questions.amount);
      if (chordName === elementId) {
        const score =
          (correctAnswers / Number(questions.amount)) * 100 + valuePerQuestion;
        setFinalScore(score);
      } else {
        const score = (correctAnswers / Number(questions.amount)) * 100;
        setFinalScore(score);
      }
      setTimeout(() => toggleClassPopUpScore(), 1200);
    }
  };


  const resetTest = () => {
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setCurrentQuestion(1);
    setChordName("");
    setChordToFind({ chord: "" });
    setFinalScore(0);
    setFinalScoreSpan(0);
    setResultOfEachQuestion("")
  };


  return (
    <div className="container ">
      <div 
        className="
          loadingNotVisible
          position-fixed top-0 start-0 w-100
          d-flex justify-content-center align-items-center"
        ref={loadingRef}
      >
        <div 
          className="
            w-50 text-center text-white fs-5 
            border-bottom ms-3 ">
          Loading ...
        </div>
      </div>
      {chords[0][0] === "refreshPageWhileTest" ? (
        <div className="row p-5 fs-5">
          <p className="text-end text-center">
            You refreshed the page while you were doing the test,
          </p>
          <Link to={routes.ENTRY} className="link-info text-center">
            Go To Main
          </Link>
        </div>
      ) : (
        <div 
          className="container mt-2 
            justify-content-center align-items-center 
            d-flex flex-column gap-4"
        >
          <div className="row w-100">
            <p 
              className="
                col-12 col-md-auto d-flex  
                justify-content-center align-items-center 
                rounded fs-3 px-md-5" 
              ref={refResultOfEachQuestion}
            >
                {resultOfEachQuestion}
            </p>
            <div className="col-12 col-md-auto ms-auto fs-5">
              <div className="container m-0 p-0">
                <p className="text-center text-md-end p-0 m-0">
                  Question {currentQuestion} of {questions.amount}
                </p>
              </div>
              <div className="container m-0 p-0">
                <p
                  className="
                    row-auto ms-auto 
                    text-center text-md-end rounded p-0 m-0"
                >
                  Correct : {correctAnswers}
                </p>
              </div>
              <div className="container m-0 p-0">
                <p
                  className="
                    row-auto ms-auto 
                    text-center text-md-end rounded p-0 m-0"
                >
                  Wrong : {wrongAnswers}
                </p>
              </div>
            </div>  
          </div>
          <div className="row">
            <div
              onClick={chordTofind}
              className="
                chordToFind text-uppercase fw-bold btn btn-dark
                rounded-circle border m-auto "
            >
              <p className="m-auto">Chord to find</p>
            </div>
          </div>
          <div className="row">
            <p className="col text-center">Options :</p>
          </div>
          <main
            className="
             row row-cols-md-4 row-cols-sm-3 row-cols-2
             w-100 h-75 gap-1
             d-flex justify-content-center align-items-center"
          >
            <button
              id="minor"
              className="p-4 border rounded btn btn-dark"
              onClick={compareAnswer}
            >
              minor
            </button>
            <button
              id="minor7"
              className="p-4 border rounded btn btn-dark"
              onClick={compareAnswer}
            >
              minor 7
            </button>
            <button
              id="minorMaj7"
              className="p-4 border rounded btn btn-dark"
              onClick={compareAnswer}
            >
              minor Maj7
            </button>
            <button
              id="halfDiminished"
              className="p-4 border rounded btn btn-dark"
              onClick={compareAnswer}
            >
              half diminished
            </button>
            <button
              id="diminished"
              className="p-4 border rounded btn btn-dark"
              onClick={compareAnswer}
            >
              diminished
            </button>
            <button
              id="major"
              className="p-4 border rounded btn btn-dark"
              onClick={compareAnswer}
            >
              major
            </button>
            <button
              id="major7"
              className="p-4 border rounded btn btn-dark"
              onClick={compareAnswer}
            >
              major 7
            </button>
            <button
              id="majorMaj7"
              className="p-4 border rounded btn btn-dark"
              onClick={compareAnswer}
            >
              major Maj7
            </button>
            <button
              id="augmented"
              className="p-4 border rounded btn btn-dark"
              onClick={compareAnswer}
            >
              augmented
            </button>
          </main>
          <div onClick={resetTest} className="row w-100 ">
            <p className="col-6 link-info restartTest">Restart Test</p>
            <Link to={routes.ENTRY} className="col-6 link-info text-center">
              Go To Main
            </Link>
          </div>
        </div>
      )}
      <div
        className="
          container-fluid w-100 vh-100 bg-dark 
          d-flex flex-column gap-2 justify-content-center align-items-center 
          position-fixed top-0 start-0 d-none "
        ref={refFinalScorePopUp}
      >
        <div className="row ">
          <p className="fs-1 m-0 p-0">
            Score <span className="fw-bold">{finalScoreSpan}</span>%
          </p>
        </div>
        <p className="fs-5">
          {finalScore < 80
            ? "You didn't pass the test 🙁"
            : "You passed the test 🙂"}
        </p>
        <div onClick={resetTest} className="d-flex gap-5 ">
          <p className="link-info restartTest" onClick={toggleClassPopUpScore}>
            Restart Test
          </p>
          <div>
            <Link to={routes.ENTRY} className="link-info text-center">
              Go To Main
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
