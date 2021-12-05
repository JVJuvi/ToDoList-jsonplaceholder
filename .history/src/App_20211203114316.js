import { Route, Router, Switch } from 'react-router';
import ToDoList from "./Components/ToDoList/ToDoList";
import { Switch } from 'react-router-dom';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={ToDoList} />
        </Sw>
    </Router>
  );
}

export default App;
