import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import feature here
import { AppLayout } from './appLayout';
import { Articles } from '../features/articles/Articles'
import { Topics } from '../features/topics/Topics';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="articles" element={<Articles />} />
          {/* <Route path="articles/:articleId" element={<Article />} /> */}
          <Route path="topics" element={<Topics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
