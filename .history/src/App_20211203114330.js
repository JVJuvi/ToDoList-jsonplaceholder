import { Route, Router } from 'react-router';
import ToDoList from "./Components/ToDoList/ToDoList";
import { Switch } from 'react-router-dom';


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
