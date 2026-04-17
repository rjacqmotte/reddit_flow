import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import feature here
import { AppLayout } from './appLayout';
import { Articles } from '../features/articles/Articles';
import { Article } from '../features/articles/Article';
import { Topics } from '../features/topics/Topics';
import { mockArticles } from '../mock/mockArticles';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Articles articles={mockArticles} />} />
          <Route path="articles/:articleId" element={<Article articles={mockArticles} />} />
          <Route path="topics" element={<Topics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
