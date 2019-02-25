import React from 'react';
import 'styles/manifest.scss';

import { renderRoutes } from 'react-router-config';
import { routes } from 'imports/client/routes.js';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from 'imports/redux/StoreConfiguration';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            {renderRoutes(routes)}
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
