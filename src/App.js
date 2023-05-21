import React from "react";
import {
  Route,
  HashRouter as Router,
  Switch,
} from "react-router-dom";

import { ROUTER } from "./utils/constant";
import Layout from "./component/layout";
import About from "./pages/about";
import Home from "./pages/home"
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Search from "./pages/search";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/react-fontawesome"
import Recipelist from "./pages/recipelist";
import Recipedetail from "./pages/recipedetail";

const App = () => {
  return (
      <Router>
        <Switch>
          <Layout>
              <Route exact path={ROUTER.HOME} component={Home}/>
              <Route path={ROUTER.ABOUT} component={About}/>
              <Route path={ROUTER.RECIPELIST} component={Recipelist}/>
              <Route path={ROUTER.RECIPEDETAIL} component={Recipedetail}/>
              <Route path={ROUTER.SEARCH} component={Search}/>
              <Route path={ROUTER.BLOG} component={Blog}/>
              <Route path={ROUTER.CONTACT} component={Contact}/>
          </Layout>
        </Switch>
      </Router>
  );
}

export default App;
