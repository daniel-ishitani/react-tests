import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Settings />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
