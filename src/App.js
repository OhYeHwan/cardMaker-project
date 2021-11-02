import Login from './components/login/login';
import styles from './app.module.css';

function App({ authService }) {
  return (
    // 단순히 스타일링만 위한 것이라면 : div
    // 의미있는 그룹이라면 : section, hearder ...
    <div className={styles.app}>
      <Login authService={authService} />
    </div>
  );
}

export default App;
