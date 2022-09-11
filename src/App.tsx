import React from 'react';
import { Route, Routes } from "react-router-dom"
import CoursesList from "./pages/CoursesList"
import Error404 from "./errors/Error404"
import "./assets/scss/main.scss"


function App() {
  return (
      <Routes>
          <Route path="/" element={<CoursesList/>} />
          <Route path='*'  element={<Error404/>} />
      </Routes>
  );
}

export default App;
