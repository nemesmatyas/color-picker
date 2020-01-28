import React, { Component } from 'react';

import seedColors from './seedColors'
import { generatePalette } from './colorHelpers';
import Palette from './Palette.component';


class App extends Component {
  render() {
    console.log(generatePalette(seedColors[0]))
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[0])} />
      </div>
    );
  }
}

export default App;
