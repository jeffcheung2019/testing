import React from 'react';

import 'styles/manifest.scss';


import { renderRoutes } from 'react-router-config';
import {routes} from 'imports/client/routes.js';

import { BrowserRouter } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
