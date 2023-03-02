import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import "./EntryPage.css";
import closeSvg from "../../assets/images/close.svg";

interface checkboxesChords {
  [index: string]: boolean;
  all: boolean;
  minor: boolean;
  minor7: boolean;
  minorMaj7: boolean;
  halfDiminished: boolean;
  diminished: boolean;
  major: boolean;
  major7: boolean;
  majorMaj7: boolean;
  augmented: boolean;
}

const initialCheckboxes: checkboxesChords = {
  all: true,
  minor: false,
  minor7: false,
  minorMaj7: false,
  halfDiminished: false,
  diminished: false,
  major: false,
  major7: false,
  majorMaj7: false,
  augmented: false,
};

const EntryPage = () => {
  const [checkboxesState, setCheckboxesState] =
    useState<checkboxesChords>(initialCheckboxes);

  const [amountOfQuestions, setAmountOfQuestions] = useState<string>("5");
  const popUpPersonalizeRef = useRef<HTMLDivElement>(null);
  const popUpWarningRef = useRef<HTMLDivElement>(null);

  const handleCheckboxes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputId = e.target.id;
    if (inputId === "all") {
      setCheckboxesState(initialCheckboxes);
    } else {
      setCheckboxesState({
        ...checkboxesState,
        all: false,
        [inputId]: !checkboxesState[inputId],
      });
    }
  };

  const handleQuestions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = e.target.value;
    setAmountOfQuestions(selectValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const checkboxesArray = Object.values(checkboxesState);
    const isThereSomeTrue = checkboxesArray.find((item) => item === true);
    if (isThereSomeTrue === undefined) {
      popUpWarningRef.current?.classList.toggle("d-none");
    }
  };

  const showPopUps = (
    e: React.MouseEvent<HTMLButtonElement | HTMLImageElement>
  ) => {
    const element = e.target as HTMLDivElement | HTMLButtonElement;
    const id = element.id;
    if (id === "popUpPersonalize") {
      popUpPersonalizeRef.current?.classList.toggle("d-none");
    } else {
      popUpWarningRef.current?.classList.toggle("d-none");
    }
  };

  return (
    <section
      className="
        section-entry w-100 min-vh-100 p-4
        d-flex flex-column justify-content-center align-items-center gap-5"
    >
      <h1 className="fw-bold">Guitar Chords Test</h1>
      <p className="fs-4 text-center">
        Test your musical skills recognizing correctly guitar chords
      </p>
      <Link to={routes.EXAMPLES} className="btn btn-primary px-3">
        Listen to examples
      </Link>
      <button
        className="btn btn-primary px-5"
        onClick={showPopUps}
        id="popUpPersonalize"
      >
        Start Test
      </button>
      <div
        className="
          position-fixed top-0 
          w-100 vh-100 
          d-flex justify-content-center align-items-center popUp d-none"
        ref={popUpPersonalizeRef}
      >
        <div
          className="
            alert alert-warning position-absolute m-3 top-0 
            w-100 text-center fs-3 d-none"
          role="alert"
          ref={popUpWarningRef}
        >
          You must select at least 1 chord
          <img
            src={closeSvg}
            alt="close icon"
            className="ms-5 closeImg"
            id="popUpWarning"
            onClick={showPopUps}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="
            container-md bg-secondary rounded 
            d-flex flex-column 
            gap-1 gap-lg-3 gap-xl-4 p-3 
            overflow-hidden"
        >
          <div className="row">
            <p className="col text-center fs-3">Personalize your test</p>
            <img
              src={closeSvg}
              alt="close icon"
              className="col-1 ms-auto closeImg"
              id="popUpPersonalize"
              onClick={showPopUps}
            />
          </div>
          <div className="row d-flex flex-column">
            <p className="col text-center m-0">How many questions :</p>
            <select
              name="amount"
              onChange={handleQuestions}
              className="
                col-5 col-sm-4 col-md-3 
                m-auto text-center amountOfQuestions"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
          <div
            className="
              row mt-4 d-flex gap-3 
              justify-content-center align-items-center"
          >
            <div className="col-5 col-sm-3 d-flex flex-column p-2">
              <input
                type="checkbox"
                id="all"
                checked={checkboxesState.all}
                onChange={handleCheckboxes}
                className="m-auto checkboxSize chordType"
              />
              <label htmlFor="all" className="m-auto chordType">
                All Chords
              </label>
            </div>
            <div className="col-5 col-sm-3 d-flex flex-column p-2">
              <input
                type="checkbox"
                id="minor"
                checked={checkboxesState.minor}
                onChange={handleCheckboxes}
                className="m-auto checkboxSize chordType"
              />
              <label htmlFor="minor" className="m-auto chordType">
                minor
              </label>
            </div>
            <div className="col-5 col-sm-3 d-flex flex-column p-2">
              <input
                type="checkbox"
                id="minor7"
                checked={checkboxesState.minor7}
                onChange={handleCheckboxes}
                className="m-auto checkboxSize chordType"
              />
              <label htmlFor="minor7" className="m-auto chordType">
                minor 7
              </label>
            </div>
            <div className="col-5 col-sm-3 d-flex flex-column p-2">
              <input
                type="checkbox"
                id="minorMaj7"
                checked={checkboxesState.minorMaj7}
                onChange={handleCheckboxes}
                className="m-auto checkboxSize chordType"
              />
              <label htmlFor="minorMaj7" className="m-auto chordType">
                minor Maj7
              </label>
            </div>
            <div className="col-5 col-sm-3 d-flex flex-column p-2">
              <input
                type="checkbox"
                id="halfDiminished"
                checked={checkboxesState.halfDiminished}
                onChange={handleCheckboxes}
                className="m-auto checkboxSize chordType"
              />
              <label htmlFor="halfDiminished" className="m-auto chordType">
                half Diminished
              </label>
            </div>
            <div className="col-5 col-sm-3 d-flex flex-column p-2">
              <input
                type="checkbox"
                id="diminished"
                checked={checkboxesState.diminished}
                onChange={handleCheckboxes}
                className="m-auto checkboxSize chordType"
              />
              <label htmlFor="diminished" className="m-auto chordType">
                diminished
              </label>
            </div>
            <div className="col-5 col-sm-3 d-flex flex-column p-2">
              <input
                type="checkbox"
                id="major"
                checked={checkboxesState.major}
                onChange={handleCheckboxes}
                className="m-auto checkboxSize chordType"
              />
              <label htmlFor="major" className="m-auto chordType">
                major
              </label>
            </div>
            <div className="col-5 col-sm-3 d-flex flex-column p-2">
              <input
                type="checkbox"
                id="major7"
                checked={checkboxesState.major7}
                onChange={handleCheckboxes}
                className="m-auto checkboxSize chordType"
              />
              <label htmlFor="major7" className="m-auto chordType">
                major 7
              </label>
            </div>
            <div className="col-5 col-sm-3 d-flex flex-column p-2">
              <input
                type="checkbox"
                id="majorMaj7"
                checked={checkboxesState.majorMaj7}
                onChange={handleCheckboxes}
                className="m-auto checkboxSize chordType"
              />
              <label htmlFor="majorMaj7" className="m-auto chordType">
                major Maj 7
              </label>
            </div>
            <div className="col-5 col-sm-3 d-flex flex-column p-2">
              <input
                type="checkbox"
                id="augmented"
                checked={checkboxesState.augmented}
                onChange={handleCheckboxes}
                className="m-auto checkboxSize chordType"
              />
              <label htmlFor="augmented" className="m-auto chordType">
                augmented
              </label>
            </div>
          </div>
          <div className="row">
            <input
              type="submit"
              value="Let's start"
              className="col-12 btn btn-primary m-auto fs-5"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default EntryPage;
