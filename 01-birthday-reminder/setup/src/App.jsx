import React, { useState } from 'react';
import axios from 'axios';

import data from './data';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);

  const FetchRandomPerson = () => {
    axios
      .get('https://randomuser.me/api/?inc=name,dob,picture,nat')
      .then((res) => {
        const result = res.data.results[0];
        const info = res.data.info;

        const { first, last } = result.name;
        const { age } = result.dob;
        const { large } = result.picture;

        const newPeople = {
          id: info.seed,
          name: `${first} ${last}`,
          age: age,
          image: large,
        };

        setPeople([...people, newPeople]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays today</h3>
        <List data={people} />
        <div className='buttons'>
          <button onClick={FetchRandomPerson}>Add random</button>
          <button onClick={() => setPeople([])}>Clear all</button>
        </div>
      </section>
    </main>
  );
};

export default App;
