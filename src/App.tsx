import React from 'react';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormPage from './pages/formPage/FormPage';

function App(): JSX.Element {
  return (
    <div className="col-lg-12 col-12">
      <Router>
        <Switch>
          <Route path="/">
            <NavBar />
            <div className="container">
              <FormPage />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
