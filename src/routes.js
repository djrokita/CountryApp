import React from "react";
import { Route, IndexRoute } from "react-router";
import Navigation from "./presentational/navigation.component";
import Home from "./presentational/home.component";
import CountriesFlagContainer from './src/containers/flag-containers.component';
import Contact from "./presentational/contact.component";
import CountryDetailsContainer from './src/containers/country-detail-container.component';
import NotFound from "./presentational/not-found.component";

export default (
  <Route path="/" component={Navigation}>
    <IndexRoute component={Home} />
    <Route path="/countries"> 
    	<IndexRoute component={CountriesFlagContainer} />
    	<Route path='country/:id' component={CountryDetailsContainer} />
    </Route>
    <Route path="/contact" component={Contact} />
    <Route path="*" component={NotFound} />
  </Route>
);
