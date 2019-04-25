import React from 'react';
import { css } from 'emotion';


const styles = {
  base: css`
    background: red;
  `,
};


const Button = ({ children }) => {
  return (
    <button className={styles.base}>
      {children}
    </button>
  );
};


export default Button;
