import { Router, Switch, Route  } from "react-router-dom";
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
