import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import { ChapterSlokas } from "./Components/ChapterSlokas";

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ChapterSlokas" component={ChapterSlokas} />
        </Switch>
      </Router>
    </>
  );
};
