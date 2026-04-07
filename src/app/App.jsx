import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
 // import feature here

export default function App() {
  return (
    // need to check if everthing ok here!!! with outlet and cie
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<AppLayout/>}>
    <Route path="articles" element={<Articles/>}/>
    <Route path="articles/:articleId" element={<Article/>}/>
    <Route path="topics" element={<Topics/>}/>
  </Route>
      </Routes>
    </BrowserRouter>
  )
}
