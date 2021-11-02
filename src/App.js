import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    // 단순히 스타일링만 위한 것이라면 : div
    // 의미있는 그룹이라면 : section, hearder ...
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
