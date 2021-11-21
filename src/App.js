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
  const [consult, setConsult] = useState(true);

  useEffect(() => {
    if (consult) {
      const consultAPI = () => {
        clientAxios
          .get('/patients')
          .then((response) => {
            // set data in state
            setDates(response.data);

            // disable consult
            setConsult(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      consultAPI();
    }
  }, [consult]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Patients dates={dates} />} />
        <Route path="/new" element={<NewDate setConsult={setConsult} />} />
        <Route path="/date/:id" element={<Date setConsult={setConsult} />} />
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
