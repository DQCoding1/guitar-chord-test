import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';
import EntryPage from './views/entry-page/EntryPage';
import ListenToExamples from './views/listen-to-examples/ListenToExamples';
import Test from './views/test-page/Test';
import { QuestionProvider, ChordsProvider } from './context/testContext';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.ENTRY} element={
          <ChordsProvider>
            <QuestionProvider>
              <EntryPage />
            </QuestionProvider>
          </ChordsProvider>} 
        />
        <Route path={routes.EXAMPLES} element={<ListenToExamples />} />
        <Route path={routes.TEST} element={
          <ChordsProvider>
            <QuestionProvider>
              <Test />
            </QuestionProvider>
          </ChordsProvider>} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
