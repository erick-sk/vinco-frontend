import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import clientAxios from './config/axios';

// components
import Patients from './components/Patients';
import NewDate from './components/NewDate';
import Date from './components/Date';

function App() {
  // app state
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const consultAPI = () => {
      clientAxios
        .get('/patients')
        .then((response) => {
          // set data in state
          setDates(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    consultAPI();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Patients dates={dates} />} />
        <Route path="/new" element={<NewDate />} />
        <Route path="/date/:id" element={<Date />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem', textAlign: 'center' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
