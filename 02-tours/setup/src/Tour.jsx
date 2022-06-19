import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 250)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'see more'}
          </button>
        </p>

        <button className='delete-btn' onClick={() => removeTours(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
