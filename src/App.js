import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import {
  Header,
  Home,
  Destination,
  Crew,
  Technology,
  Error
} from "./components"


function App() {
  return (
    <Router>
      <main>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
