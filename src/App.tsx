import React from 'react';
import './App.css';
import EntryPage from './views/entry-page/EntryPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.ENTRY} element={<EntryPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
