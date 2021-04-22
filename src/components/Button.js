// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--trans'];

const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, linkTo }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  if (linkTo) {
    return (
      <Link to={linkTo} className="btn-mobile">
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
          {children}
        </button>
      </Link>
    );
  }
  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
