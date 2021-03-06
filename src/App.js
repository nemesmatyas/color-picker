import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import seedColors from './seedColors'
import { generatePalette } from './colorHelpers';
import Palette from './Palette.component';
import PaletteList from './PaletteList.component';


class App extends Component {

  findPalette = id => {
    return seedColors.find(palette => palette.id === id)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
        <Route exact path="/palette/:id" render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
      </Switch>

      /* <div className="App">
      <Palette palette={generatePalette(seedColors[0])} />
    </div> */
    );
  }
}

export default App;
