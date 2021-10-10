import './App.css';
import Details_1 from './components/Details_1';
import Details_2 from './components/Details_2'
import {Switch, Route} from 'react-router-dom'

import '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Details_1} />
        <Route exact path="/path_2" component={Details_2} />

      </Switch>
      {/* <Details /> */}
    </div>
  );
}

export default App;
