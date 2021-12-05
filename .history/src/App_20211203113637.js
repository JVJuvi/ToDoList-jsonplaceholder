import {Router, Route, Switch} from 'react-router-dom';
import ToDoList from "./Components/ToDoList/ToDoList";


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={ToDoList} />
        </Switch>
    </Router>
  );
}

export default App;
