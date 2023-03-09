import React from "react";
import musicNote from "../../assets/images/musicNote.png";
import "./ListenToExamples.css";
import {
  ChordInfo,
  minorChords,
  minor7Chords,
  minorMaj7Chords,
  halfDimChords,
  dimChords,
  majorChords,
  major7Chords,
  majorMaj7Chords,
  augChords,
} from "../../const/chords";
import { Link } from 'react-router-dom'
import { routes } from "../../routes/routes";

const ListenToExamples = () => {
  let audio = new Audio("");

  const playChord = (chords: Array<ChordInfo>) => {
    const randomNum = Math.floor(Math.random() * chords.length);
    audio = new Audio(chords[randomNum].chord);
    audio.play();
  };

  function chordType(e: React.MouseEvent<HTMLButtonElement>) {
    audio.muted = true;
    const btnId = (e.target as HTMLButtonElement).id;
    switch (btnId) {
      case "minor": playChord(minorChords);
        break;
      case "minor7": playChord(minor7Chords);
        break;
      case "minorMaj7": playChord(minorMaj7Chords);
        break;
      case "halfDim": playChord(halfDimChords);
        break;
      case "dim": playChord(dimChords);
        break;
      case "major": playChord(majorChords);
        break;
      case "major7": playChord(major7Chords);
        break;
      case "majorMaj7": playChord(majorMaj7Chords);
        break;
      case "aug": playChord(augChords);
        break;
    }
  }

  return (
    <section className="container p-3 w-100 ">
      <header className="row p-4 mt-4">
        <h2 className="col">
          Listen to the chord types:
          <img
            className="musicNote ms-md-4"
            src={musicNote}
            alt="music note"
          />
        </h2>
      </header>
      <main
        className="
        row row-cols-md-4 row-cols-sm-3 row-cols-2
        w-100 h-75 gap-4 
        d-flex justify-content-center align-items-center mt-5"
      >
        <button
          onClick={chordType}
          className="p-4 border rounded btn btn-dark"
          id="minor"
        >
          minor
        </button>
        <button
          onClick={chordType}
          id="minor7"
          className="p-4 border rounded btn btn-dark"
        >
          minor 7
        </button>
        <button
          onClick={chordType}
          id="minorMaj7"
          className="p-4 border rounded btn btn-dark"
        >
          minor Maj7
        </button>
        <button
          onClick={chordType}
          id="halfDim"
          className="p-4 border rounded btn btn-dark"
        >
          half diminished
        </button>
        <button
          onClick={chordType}
          id="dim"
          className="p-4 border rounded btn btn-dark"
        >
          diminished
        </button>
        <button
          onClick={chordType}
          id="major"
          className="p-4 border rounded btn btn-dark"
        >
          major
        </button>
        <button
          onClick={chordType}
          id="major7"
          className="p-4 border rounded btn btn-dark"
        >
          major 7
        </button>
        <button
          onClick={chordType}
          id="majorMaj7"
          className="p-4 border rounded btn btn-dark"
        >
          major Maj7
        </button>
        <button
          onClick={chordType}
          id="aug"
          className="p-4 border rounded btn btn-dark"
        >
          augmented
        </button>
      </main>
      <div className="row mt-5">
        <Link 
          to={routes.ENTRY} 
          className="col-12 link-info text-end">
            Go To Main
        </Link>
      </div>
    </section>
  );
};

export default ListenToExamples;
