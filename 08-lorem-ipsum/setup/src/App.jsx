import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data);
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => {
            const cur = e.target.value;
            if (cur < 0) return;
            if (cur > data.length) return;
            setCount(e.target.value);
          }}
        />
        <button>generate</button>
      </form>

      <article className='lorem-text'>
        {text.map((p, idx) => {
          if (idx < count) {
            return <p key={idx}>{p}</p>;
          }

          {
            /* yeah i know */
          }
          return null;
        })}
      </article>
    </section>
  );
}

export default App;
