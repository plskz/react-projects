import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#4298c9').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const colors = new Values(color).all(10);
      setError(false);
      setList(colors);
      // console.log(colors);
    } catch (err) {
      setError(true);
      // console.log(err);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onClick={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder='#4298c9'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {/* <h4>list goes here</h4> */}
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
