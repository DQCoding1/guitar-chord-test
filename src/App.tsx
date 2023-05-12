import React from 'react';
import './App.css';
import { HashRouter , Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';
import EntryPage from './views/entry-page/EntryPage';
import ListenToExamples from './views/listen-to-examples/ListenToExamples';
import Test from './views/test-page/Test';
import { QuestionProvider, ChordsProvider } from './context/testContext';
import NotFound from './views/not-found/NotFound';

function App() {
  return (
    <HashRouter>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
