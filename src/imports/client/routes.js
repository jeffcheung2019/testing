//list of pages component to be mounted on the routes
import Layout from 'imports/ui/Layout';

import SigninPage from 'imports/ui/pages/signinPage/SigninPage';
import SignupPage from 'imports/ui/pages/signupPage/SignupPage';
import WelcomePage from 'imports/ui/pages/welcomePage/WelcomePage';
//

export const routes = [
  {
    component: Layout,
    routes: [
      { path: "/", exact: true, component: WelcomePage },
      { path: "/signup", component: SignupPage },
      { path: "/signin", component: SigninPage }

    ]
  }
];
