import React from 'react';

import seedColors from './seedColors'
import Palette from './Palette.component';

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[0]} />
    </div>
  );
}

export default App;
