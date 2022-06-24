import React, { useState } from 'react';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const _rgb = rgb.join(',');
  const hexValue = `#${hexColor}`;

  const handleClick = () => {
    setAlert(!alert);
    navigator.clipboard.writeText(hexValue);

    setTimeout(() => {
      setAlert(false);
    }, 2 * 1000);
  };

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${_rgb})` }}
      onClick={handleClick}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
