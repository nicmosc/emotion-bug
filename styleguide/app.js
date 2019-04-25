import React from 'react';
import { css } from 'emotion';

import Button from '../lib/Button';


const styles = {
  app: css`
    background: yellow;
  `,
};


const App = () => {
  return (
    <div className={styles.app}>
      <h1>App example</h1>
      <Button>Imported component</Button>
    </div>
  );
};


export default App;
