import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import {createBrowserHistory} from 'history'

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>

      
    </Router>
  );
}

export default App;



