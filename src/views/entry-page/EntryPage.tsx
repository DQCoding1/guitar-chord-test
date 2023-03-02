import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import "./EntryPage.css";
import closeSvg from '../../assets/images/close.svg'

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
    const selectValue = e.target.value   
    setAmountOfQuestions(selectValue)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
 

  return (
    <section
      className="
      section-entry
      d-flex flex-column justify-content-center align-items-center gap-5
      w-100 min-vh-100 p-4"
    >
      <h1 className="fw-bold">Guitar Chords Test</h1>
      <p className="fs-4 text-center">
        Test your musical skills recognizing correctly guitar chords
      </p>
      <Link to={routes.EXAMPLES} className="btn btn-primary px-3">
        Listen to examples
      </Link>
      <button className="btn btn-primary px-5">Start Test</button>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Personalize your test</p>
            <img src={closeSvg} alt="" />
          </div>
          <div>
            <p>how many questions ?</p>
            <select name="amount" onChange={handleQuestions}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
          <div>
            <p>chord types :</p>
            <div>
              <input
                type="checkbox"
                id="all"
                checked={checkboxesState.all}
                onChange={handleCheckboxes}
              />
              <label htmlFor="all">All Chords</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="minor"
                checked={checkboxesState.minor}
                onChange={handleCheckboxes}
              />
              <label htmlFor="minor">minor</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="minor7"
                checked={checkboxesState.minor7}
                onChange={handleCheckboxes}
              />
              <label htmlFor="minor7">minor 7</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="minorMaj7"
                checked={checkboxesState.minorMaj7}
                onChange={handleCheckboxes}
              />
              <label htmlFor="minorMaj7">minor Maj7</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="halfDiminished"
                checked={checkboxesState.halfDiminished}
                onChange={handleCheckboxes}
              />
              <label htmlFor="halfDiminished">half Diminished</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="diminished"
                checked={checkboxesState.diminished}
                onChange={handleCheckboxes}
              />
              <label htmlFor="diminished">diminished</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="major"
                checked={checkboxesState.major}
                onChange={handleCheckboxes}
              />
              <label htmlFor="major">major</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="major7"
                checked={checkboxesState.major7}
                onChange={handleCheckboxes}
              />
              <label htmlFor="major7">major 7</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="majorMaj7"
                checked={checkboxesState.majorMaj7}
                onChange={handleCheckboxes}
              />
              <label htmlFor="majorMaj7">major Maj 7</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="augmented"
                checked={checkboxesState.augmented}
                onChange={handleCheckboxes}
              />
              <label htmlFor="augmented">augmented</label>
            </div>
          </div>
          <div>
            <input type="submit" value="Let's start" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default EntryPage;
