// import { Route, Router } from 'react-router-dom';
import ToDoList from "./Components/ToDoList/ToDoList";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from 'history';
import './css/App.css';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
        <Switch>
            <Route path="/todolist" exact component={ToDoList} />           
            <Route path="/" exact component={ToDoList} />
        </Switch>
    </Router>
  );
}

export default App;
