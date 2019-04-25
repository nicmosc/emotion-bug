import React from 'react';
import { css } from 'emotion';

import Button from '../lib/Button';


const styles = {
  base: css`
    background: yellow;
  `,
};


const App = () => {
  return (
    <div className={styles.base}>
      <h1>App example</h1>
      <Button>Imported component</Button>
    </div>
  );
};


export default App;
