import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

import axios from 'axios';

const URL = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = () => {
    axios
      .get(URL)
      .then((res) => {
        setTours(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log('error', err);
      });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!tours.length) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours data={tours} removeTours={removeTours} />
    </main>
  );
}

export default App;
